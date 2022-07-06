import { PrismaService } from './../prisma/prisma.service';
import {Injectable, BadRequestException, NotFoundException, InternalServerErrorException} from '@nestjs/common';
import {LiveStatusInput} from "../resolvers/team/dto/live-status.input";
import {Party} from "../models/party.model";
import {promises} from "dns";
import {errorObject} from "rxjs/internal-compatibility";
import {UpdatePartyInput} from "../resolvers/party/dto/update-party.input";
import {CreatePartyInput} from "../resolvers/party/dto/create-party.input";

@Injectable()
export class PartyService {
    constructor(
        private prisma: PrismaService,
    ) {}

    async findParty(partyId:string): Promise<Party>{
        return this.prisma.party.findUnique({
            where: {
                id: partyId,
            }
        });
    }

    async createParty(newQuizzData: CreatePartyInput) {
        return this.prisma.quizz.create({
            data: newQuizzData
        });
    }

    async updateParty(newQuizzData: UpdatePartyInput) {
        return this.prisma.quizz.update({
            data: newQuizzData,
            where: {
                id: newQuizzData.id,
            },
        });
    }
}
