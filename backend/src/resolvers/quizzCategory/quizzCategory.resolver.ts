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
import { QuizzCategory } from "../../models/quizzCategory.model";
import { QuizzCategoryService } from "src/services/quizzCategory.service";
import { UpdateQuizzCategoryInput } from "./dto/update-quizzCategory.input";
import { CreateQuizzCategoryInput } from "./dto/create-quizzCategory.input";
import { Quizz } from "../../models/quizz.model";

@Resolver((of) => QuizzCategory)
@UseGuards(GqlAuthGuard)
export class QuizzCategoryResolver {
  constructor(
    private quizzCategoryService: QuizzCategoryService,
    private prisma: PrismaService
  ) {}

  @Query((returns) => QuizzCategory)
  async getQuizzCategoryById(quizzCategory: QuizzCategory,@Args('quizzCategoryId') quizzCategoryId:string): Promise<QuizzCategory> {
    return this.quizzCategoryService.findQuizzCategoryById(quizzCategoryId)
  }
  @Query((returns) => [QuizzCategory])
  async getQuizzCategoryAll(): Promise<QuizzCategory[]> {
    return await this.quizzCategoryService.findQuizzCategoryAll()
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((returns) => QuizzCategory)
  async updateQuizzCategory(
    @Args("data") newQuizzCategoryData: UpdateQuizzCategoryInput
  ) {
    return this.quizzCategoryService.updateQuizzCategory(
      newQuizzCategoryData
    );
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((returns) => QuizzCategory)
  async createQuizzCategory(
    @UserEntity() user,
    quizzTCategory: QuizzCategory,
    @Args("data") newQuizzCategoryData: CreateQuizzCategoryInput
  ) {
    const { id } = user;
    const isRequestingUserAdmin = await this.prisma.user.findUnique({
      where: { id },
    });
    if (isRequestingUserAdmin.role.includes("ADMIN")) {
      return this.quizzCategoryService.createQuizzCategory(
        newQuizzCategoryData
      );
    } else {
      throw new UnauthorizedException();
    }
  }

  @ResolveField("quizz")
  quizz( quizz: Quizz) : Promise<Quizz[]> {
    return this.prisma.quizz
        .findMany({ where: { quizzCategoryId: quizz.id },include: { quizzCategory: true,quizzQuestion: {include: {quizzAnswer:true}}}});
  }
}
