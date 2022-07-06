import { PrismaService } from './../prisma/prisma.service';
import {Injectable, BadRequestException, NotFoundException, InternalServerErrorException} from '@nestjs/common';
import {UpdateTeamInput} from "../resolvers/team/dto/update-team.input";
import {CreateTeamInput} from "../resolvers/team/dto/create-team.input";
import {Team} from "../models/team.model";
import {FindManyTeamsInput} from "../resolvers/team/dto/findManyTeams.input";

@Injectable()
export class TeamService {
    constructor(
        private prisma: PrismaService
    ) {}

    async findAllTeam(): Promise<Team[]>{
        let teams = await this.prisma.team.findMany();
        return teams;
    }

    async findTeam(teamId:string): Promise<Team>{
        return this.prisma.team.findUnique({
            where: {
                id: teamId,
            }
        });
    }

    async findTeamBy(data: FindManyTeamsInput, userId): Promise<Team[]>{
        let teams = await this.prisma.team.findMany({
            where: {
                OR:
                    [
                        {
                            name: {
                                contains: data.name,
                                mode: 'insensitive',
                            }
                        },
                        {
                            status: data.status
                        },
                        {
                            users: {
                                some: {
                                    id: userId
                                }
                            }
                        },

                    ],
            },
        });

        console.log(teams)
        return teams;
    }

    async createTeam(newTeamData: CreateTeamInput) {
        return this.prisma.team.create({
            data: newTeamData
        });
    }

    async updateTeam(teamId:string, newTeamData: UpdateTeamInput) {
        return this.prisma.team.update({
            data: newTeamData,
            where: {
                id: teamId,
            },
        });
    }

    deleteTeam(teamId: string) {
        return this.prisma.team.delete({
            where: {
                id: teamId
            }
        });
    }
}
