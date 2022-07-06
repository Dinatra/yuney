import { PrismaService } from './../prisma/prisma.service';
import {Injectable, BadRequestException, NotFoundException, InternalServerErrorException} from '@nestjs/common';
import {LiveStatusInput} from "../resolvers/team/dto/live-status.input";
import {UpdateQuizzInput} from "../resolvers/quizz/dto/update-quizz.input";
import {CreateQuizzInput} from "../resolvers/quizz/dto/create-quizz.input";
import {Quizz} from "../models/quizz.model";
import {promises} from "dns";
import {errorObject} from "rxjs/internal-compatibility";

@Injectable()
export class QuizzService {
    constructor(
        private prisma: PrismaService,
    ) {}

    async findQuizz(quizzId:string): Promise<Quizz>{
        return this.prisma.quizz.findUnique({
            where: {
                id: quizzId,
            },
            include:{

                quizzQuestion: {
                    include:{
                        quizzAnswer:true
                    }
                },
                quizzCategory: true
            }
        });
    }

    async createQuizz(newQuizzData: CreateQuizzInput) {
        return this.prisma.quizz.create({
            data: newQuizzData
        });
    }

    async updateQuizz(newQuizzData: UpdateQuizzInput) {
        return this.prisma.quizz.update({
            data: newQuizzData,
            where: {
                id: newQuizzData.id,
            },
        });
    }
}
