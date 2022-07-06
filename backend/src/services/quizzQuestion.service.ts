import { PrismaService } from './../prisma/prisma.service';
import {Injectable, BadRequestException, NotFoundException, InternalServerErrorException} from '@nestjs/common';
import {LiveStatusInput} from "../resolvers/team/dto/live-status.input";
import {UpdateQuizzQuestionInput} from "../resolvers/quizzQuestion/dto/update-quizzQuestion.input";
import {CreateQuizzQuestionInput} from "../resolvers/quizzQuestion/dto/create-quizzQuestion.input";
import {promises} from "dns";
import {errorObject} from "rxjs/internal-compatibility";
import { QuizzQuestion } from "../models/quizzQuestion.model";
import {Quizz} from "../models/quizz.model";

@Injectable()
export class QuizzQuestionService {
    constructor(
        private prisma: PrismaService,
    ) {}

    async findQuizzQuestionByQuizz(quizzQuestionId:string): Promise<QuizzQuestion[]>{
        return this.prisma.quizzQuestion.findMany({
            where: {
                id: quizzQuestionId
            },
            include: {quizzAnswer:true}
        });
    }

    async createQuizzQuestion(newQuizzQuestionData: CreateQuizzQuestionInput): Promise<CreateQuizzQuestionInput> {
        return this.prisma.quizzQuestion.create({
            data: newQuizzQuestionData
        });
    }

    async updateQuizzquestion(newQuizzQuestionData: UpdateQuizzQuestionInput): Promise<UpdateQuizzQuestionInput> {
        return  await this.prisma.quizzQuestion.update({
            data: newQuizzQuestionData,
            where: {
                id: newQuizzQuestionData.id,
            },
        });
    }
}
