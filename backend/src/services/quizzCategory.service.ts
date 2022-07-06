import { PrismaService } from './../prisma/prisma.service';
import {Injectable, BadRequestException, NotFoundException, InternalServerErrorException} from '@nestjs/common';
import {LiveStatusInput} from "../resolvers/team/dto/live-status.input";
import {UpdateQuizzCategoryInput} from "../resolvers/quizzCategory/dto/update-quizzCategory.input";
import {CreateQuizzCategoryInput} from "../resolvers/quizzCategory/dto/create-quizzCategory.input";
import {promises} from "dns";
import {errorObject} from "rxjs/internal-compatibility";
import {QuizzCategory} from "../models/quizzCategory.model";
import {Parent, ResolveField} from "@nestjs/graphql";
import {Quizz} from "../models/quizz.model";

@Injectable()
export class QuizzCategoryService {
    constructor(
        private prisma: PrismaService,
    ) {}

    async findQuizzCategoryById(quizzCategoryId:string): Promise<QuizzCategory>{
        return await this.prisma.quizzCategory.findUnique({
            where: {
                id: quizzCategoryId,
            },
            include: {
                quizz: {
                    include: {
                        quizzQuestion: {
                            include : {
                                quizzAnswer: true
                            }
                        }
                    }

                },
        }
        });

    }
    async findQuizzCategoryAll(): Promise<QuizzCategory[]>{
        return await this.prisma.quizzCategory.findMany({
            include: {
                quizz: {
                    include: {quizzQuestion: {
                        include : {
                            quizzAnswer: true
                        }
                        }}
                },

            }
        })

    }

    async createQuizzCategory(newQuizzCategoryData: CreateQuizzCategoryInput) {
        return this.prisma.quizzCategory.create({
            data: newQuizzCategoryData
        });
    }

    async updateQuizzCategory(newQuizzCategoryData: UpdateQuizzCategoryInput) {
        return this.prisma.quizzCategory.update({
            data: newQuizzCategoryData,
            where: {
                id: newQuizzCategoryData.id,
            },
        });
    }
}
