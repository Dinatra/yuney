import { PrismaService } from '../../prisma/prisma.service';
import { GqlAuthGuard } from '../../guards/gql-auth.guard';
import {
    Resolver,
    Query,
    Parent,
    Mutation,
    Args,
    ResolveField,
} from '@nestjs/graphql';
import {UnauthorizedException, UseGuards} from '@nestjs/common';
import { UserEntity } from '../../decorators/user.decorator';
import {QuizzQuestion} from '../../models/quizzQuestion.model';
import { QuizzQuestionService } from 'src/services/quizzQuestion.service';
import { UpdateQuizzQuestionInput } from './dto/update-quizzQuestion.input';
import {CreateQuizzQuestionInput} from "./dto/create-quizzQuestion.input";
import {TeamEntity} from "../../decorators/team.decorator";
import {User} from "../../models/user.model";
import {CreateQuizzInput} from "../quizz/dto/create-quizz.input";
import {Quizz} from "../../models/quizz.model";

@Resolver((of) => QuizzQuestion)
@UseGuards(GqlAuthGuard)
export class QuizzQuestionResolver {
    constructor(
        private quizzQuestionService: QuizzQuestionService,
        private prisma: PrismaService
    ) {}

    @Query((returns) => [QuizzQuestion])
    async findQuizzQuestion(@Args('quizzQuestionId')quizzQuestionId:string): Promise<QuizzQuestion[]> {
        return await this.quizzQuestionService.findQuizzQuestionByQuizz(quizzQuestionId)
    }

    @UseGuards(GqlAuthGuard)
    @Mutation((returns) => QuizzQuestion)
    async updateQuizzQuestion(
        @Args('data') newQuizzQuestionData: UpdateQuizzQuestionInput
    ) {
        return this.quizzQuestionService.updateQuizzquestion(
            newQuizzQuestionData
        );
    }

    @UseGuards(GqlAuthGuard)
    @Mutation((returns) => QuizzQuestion)
    async createQuizzQuestion(@UserEntity() user, @Args("data") newQuizzQuestionData: CreateQuizzQuestionInput) {
        const { id } = user;
        const isRequestingUserAdmin = await this.prisma.user.findUnique({ where: { id } });
        if(isRequestingUserAdmin.role.includes("ADMIN")) {
            return this.quizzQuestionService.createQuizzQuestion(newQuizzQuestionData);
        } else {
            throw new UnauthorizedException();
        }
    }
}
