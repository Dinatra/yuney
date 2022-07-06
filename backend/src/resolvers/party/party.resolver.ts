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
import { UpdatePartyInput } from "./dto/update-party.input";
import { CreatePartyInput } from "./dto/create-party.input";
import { TeamEntity } from "../../decorators/team.decorator";
import {Party} from "../../models/party.model";
import {PartyService} from "../../services/party.service";
import {User} from "../../models/user.model";
import {PartyHistory} from "../../models/partyHistory.model";

@Resolver((of) => Party)
@UseGuards(GqlAuthGuard)
export class PartyResolver {
  constructor(
    private partyService: PartyService,
    private prisma: PrismaService
  ) {}

  @Query((returns) => [Party])
  async getParty(@UserEntity() party: Party,@Args('partyId')partyId:string): Promise<Party[]> {
    return this.partyService.findParty(partyId)
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((returns) => Party)
  async updateParty(
    @Args("data") newPartyData: UpdatePartyInput
  ) {
    return this.partyService.updateParty(newPartyData);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((returns) => Party)
  async createParty(
    @UserEntity() user,
    @Args("data") newPartyData: CreatePartyInput
  ) {
    const { id } = user;
    const isRequestingUserAdmin = await this.prisma.user.findUnique({
      where: { id },
    });
    if (isRequestingUserAdmin.role.includes("ADMIN")) {
      return this.partyService.createParty(newPartyData);
    } else {
      throw new UnauthorizedException();
    }
  }
}
