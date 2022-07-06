import { PrismaService } from "../../prisma/prisma.service";
import { GqlAuthGuard } from "../../guards/gql-auth.guard";
import {
  Resolver,
  Query,
  Parent,
  Mutation,
  Args,
  ResolveField,
} from "@nestjs/graphql";
import { UnauthorizedException, UseGuards } from "@nestjs/common";
import { UserEntity } from "../../decorators/user.decorator";

import { UpdatePartyHistoryInput } from "./dto/update-partyHistory.input";
import { CreatePartyHistoryInput } from "./dto/create-partyHistory.input";
import { TeamEntity } from "../../decorators/team.decorator";
import { User } from "../../models/user.model";
import { Team } from "../../models/team.model";
import {PartyHistoryService} from "../../services/partyHistory.service";
import {PartyHistory} from "../../models/partyHistory.model";
import {Party} from "../../models/party.model";

@Resolver((of) => PartyHistory)
@UseGuards(GqlAuthGuard)
export class PartyHistoryResolver {
  constructor(
    private partyHistoryService: PartyHistoryService,
    private prisma: PrismaService
  ) {}

  @Query((returns) => PartyHistory)
  async getQPartyHistory(@UserEntity() partyHistory: PartyHistory,@Args('partyHistoryId')partyHistoryId:string): Promise<PartyHistory> {
    return this.partyHistoryService.findPartyHistory(partyHistoryId)
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((returns) => PartyHistory)
  async updatePartyHistory(
    @Args("data") newPartyHistoryData: UpdatePartyHistoryInput
  ) {
    return this.partyHistoryService.updatePartyHistory(newPartyHistoryData);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((returns) => PartyHistory)
  async createPartyHistory(
    @UserEntity() user,
    @Args("data") newPartyHistoryData: CreatePartyHistoryInput
  ) {
    const { id } = user;
    const isRequestingUserAdmin = await this.prisma.user.findUnique({
      where: { id },
    });
    if (isRequestingUserAdmin.role.includes("ADMIN")) {
      return this.partyHistoryService.createPartyHistory(newPartyHistoryData);
    } else {
      throw new UnauthorizedException();
    }
  }
  @ResolveField('Party')
  party(@Parent() party: Party) {
    return this.prisma.party.findUnique({ where: { id: party.id } }).partyHistory();
  }
}
