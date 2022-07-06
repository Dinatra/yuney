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
import { Quizz } from "../../models/quizz.model";
import { QuizzService } from "src/services/quizz.service";
import { UpdateQuizzInput } from "./dto/update-quizz.input";
import { CreateQuizzInput } from "./dto/create-quizz.input";
import { TeamEntity } from "../../decorators/team.decorator";
import { User } from "../../models/user.model";
import { Team } from "../../models/team.model";
import { QuizzCategory } from "../../models/quizzCategory.model";

@Resolver((of) => Quizz)
@UseGuards(GqlAuthGuard)
export class QuizzResolver {
  constructor(
    private quizzService: QuizzService,
    private prisma: PrismaService
  ) {}

  @Query((returns) => Quizz)
  async getQuizz(@UserEntity() quizz: Quizz,@Args('quizzId')quizzId:string): Promise<Quizz> {
    return this.quizzService.findQuizz(quizzId)
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((returns) => Quizz)
  async updateQuizz(
    @Args("data") newQuizzData: UpdateQuizzInput
  ) {
    return this.quizzService.updateQuizz(newQuizzData);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((returns) => Quizz)
  async createQuizz(
    @UserEntity() user,
    @Args("data") newQuizzData: CreateQuizzInput
  ) {
    const { id } = user;
    const isRequestingUserAdmin = await this.prisma.user.findUnique({
      where: { id },
    });
    if (isRequestingUserAdmin.role.includes("ADMIN")) {
      return this.quizzService.createQuizz(newQuizzData);
    } else {
      throw new UnauthorizedException();
    }
  }
}
