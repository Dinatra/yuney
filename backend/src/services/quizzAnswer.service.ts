import { PrismaService } from './../prisma/prisma.service';
import {Injectable, BadRequestException, NotFoundException, InternalServerErrorException} from '@nestjs/common';
import {LiveStatusInput} from "../resolvers/team/dto/live-status.input";
import {promises} from "dns";
import {errorObject} from "rxjs/internal-compatibility";
import {UpdateQuizzAnswerInput} from "../resolvers/quizzAnswer/dto/update-quizzAnswer.input";
import {CreateQuizzAnswerInput} from "../resolvers/quizzAnswer/dto/create-quizzAnswer.input";
import {QuizzAnswer} from "../models/quizzAnswer.model";
import {QuizzQuestion} from "../models/quizzQuestion.model";


@Injectable()
export class QuizzAnswerService {
    constructor(
        private prisma: PrismaService,
    ) {}

    async findQuizzAnswerByQuestion(quizzQuestionId:string): Promise<QuizzAnswer[]>{
        return this.prisma.quizzAnswer.findMany({
           where : {
               quizzQuestionId: quizzQuestionId
           }
        });
    }

    async createQuizzAnswer(newQuizzAnswerData: CreateQuizzAnswerInput): Promise<CreateQuizzAnswerInput> {
        return this.prisma.quizzAnswer.create({
            data: newQuizzAnswerData
        });
    }

    async updateQuizzAnswer(newQuizzAnswerData: UpdateQuizzAnswerInput): Promise<UpdateQuizzAnswerInput> {
        return  await this.prisma.quizzAnswer.update({
            data: newQuizzAnswerData,
            where: {
                id: newQuizzAnswerData.id,
            },
        });
    }
}
