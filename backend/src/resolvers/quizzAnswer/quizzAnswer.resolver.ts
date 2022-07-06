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
import { UpdateQuizzAnswerInput } from './dto/update-quizzAnswer.input';
import {CreateQuizzAnswerInput} from "./dto/create-quizzAnswer.input";
import {TeamEntity} from "../../decorators/team.decorator";
import {User} from "../../models/user.model";
import {QuizzAnswer} from "../../models/quizzAnswer.model";
import {QuizzAnswerService} from "../../services/quizzAnswer.service";
import {Quizz} from "../../models/quizz.model";

@Resolver((of) => QuizzAnswer)
@UseGuards(GqlAuthGuard)
export class QuizzAnswerResolver {
    constructor(
        private quizzAnswerService: QuizzAnswerService,
        private prisma: PrismaService
    ) {}

    @Query((returns) => [QuizzAnswer])
    async findQuizzAnswer(quizzQuestion: QuizzQuestion,@Args('quizzQuestionId')quizzQuestionId:string): Promise<QuizzAnswer[]> {
        return await this.quizzAnswerService.findQuizzAnswerByQuestion(quizzQuestionId)
    }

    @UseGuards(GqlAuthGuard)
    @Mutation((returns) => QuizzAnswer)
    async updateQuizzAnswer(
        @Args('data') newQuizzAnswerData: UpdateQuizzAnswerInput
    ) {
        return this.quizzAnswerService.updateQuizzAnswer(
            newQuizzAnswerData
        );
    }

    @UseGuards(GqlAuthGuard)
    @Mutation((returns) => QuizzAnswer)
    async createQuizzAnswer(@UserEntity() user, @Args("data") newQuizzAnswerData: CreateQuizzAnswerInput) {
        const { id } = user;
        const isRequestingUserAdmin = await this.prisma.user.findUnique({ where: { id } });
        if(isRequestingUserAdmin.role.includes("ADMIN")) {
            return this.quizzAnswerService.createQuizzAnswer(newQuizzAnswerData);
        } else {
            throw new UnauthorizedException();
        }
    }

}
