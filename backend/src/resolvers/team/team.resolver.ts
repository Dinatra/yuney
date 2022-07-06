import { PrismaService } from './../../prisma/prisma.service';
import { GqlAuthGuard } from '../../guards/gql-auth.guard';
import {
    Resolver,
    Query,
    Parent,
    Mutation,
    Args,
    ResolveField,
} from '@nestjs/graphql';
import {NotFoundException, UseGuards} from '@nestjs/common';
import {Team} from "../../models/team.model";
import {LiveStatusInput} from "./dto/live-status.input";
import {TeamService} from "../../services/team.service";
import {UpdateTeamInput} from "./dto/update-team.input";
import {TeamEntity} from "../../decorators/team.decorator";
import {CreateTeamInput} from "./dto/create-team.input";
import {errorObject} from "rxjs/internal-compatibility";
import {User} from "../../models/user.model";
import {FindManyTeamsInput} from "./dto/findManyTeams.input";
import {UserEntity} from "../../decorators/user.decorator";

@Resolver((of) => Team)
@UseGuards(GqlAuthGuard)
export class TeamResolver {
    constructor(
        private teamService: TeamService,
        private prisma: PrismaService
    ) {}

    @Query((returns) => Team)
    async findTeam(@TeamEntity() team: Team,@Args('teamId')teamId:string): Promise<Team> {
        return this.teamService.findTeam(teamId);
    }

    @UseGuards(GqlAuthGuard)
    @Query((returns) => [Team])
    async findAllTeam(): Promise<Team[]> {
        let teams = await this.teamService.findAllTeam();
        return teams
    }

    @Query((returns) => [Team])
    async findTeamBy(@UserEntity() user: User,@TeamEntity() team: Team,@Args('data')data : FindManyTeamsInput): Promise<Team[]> {
        const teams = this.teamService.findTeamBy(data, user.id);
        return teams
    }

    @UseGuards(GqlAuthGuard)
    @Mutation((returns) => Team)
    async createTeam(
        @TeamEntity() team: Team,
        @Args('data') newTeamData: CreateTeamInput
    ) {
            return this.teamService.createTeam(newTeamData);
    }

    @UseGuards(GqlAuthGuard)
    @Mutation((returns) => Team)
    async updateTeam(
        @TeamEntity() team: Team,
        @Args('data') newTeamData: UpdateTeamInput,@Args('teamId') teamId:string
    ) {
        return this.teamService.updateTeam(teamId, newTeamData);
    }

    @UseGuards(GqlAuthGuard)
    @Mutation((returns) => Team)
    async deleteTeam(
        @TeamEntity() team: Team, @Args('teamId') teamId:string
    ) {
        return this.teamService.deleteTeam(teamId);
    }

    @ResolveField('user')
    user(@Parent() user: User) {
        return this.prisma.user.findUnique({ where: { id: user.id } })//.teams();
    }

}
