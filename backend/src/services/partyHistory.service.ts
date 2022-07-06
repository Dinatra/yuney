import { PrismaService } from './../prisma/prisma.service';
import {Injectable, BadRequestException, NotFoundException, InternalServerErrorException} from '@nestjs/common';
import {LiveStatusInput} from "../resolvers/team/dto/live-status.input";
import {promises} from "dns";
import {errorObject} from "rxjs/internal-compatibility";
import {PartyHistory} from "../models/partyHistory.model";
import {UpdatePartyHistoryInput} from "../resolvers/partyHistory/dto/update-partyHistory.input";
import {CreatePartyHistoryInput} from "../resolvers/partyHistory/dto/create-partyHistory.input";

@Injectable()
export class PartyHistoryService {
    constructor(
        private prisma: PrismaService,
    ) {}

    async findPartyHistory(partyHistoryId:string): Promise<PartyHistory>{
        return this.prisma.partyHistory.findUnique({
            where: {
                id: partyHistoryId,
            }
        });
    }

    async createPartyHistory(newPartyHistoryData: CreatePartyHistoryInput) {
        return this.prisma.partyHistory.create({
            data: newPartyHistoryData
        });
    }

    async updatePartyHistory(newPartyHistoryData: UpdatePartyHistoryInput) {
        return this.prisma.partyHistory.update({
            data: newPartyHistoryData,
            where: {
                id: newPartyHistoryData.id,
            },
        });
    }
}
