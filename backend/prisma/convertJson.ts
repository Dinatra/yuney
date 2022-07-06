import { PrismaClient } from "@prisma/client";
import {BaseModel} from "../src/models/base.model";
import {ObjectType} from "@nestjs/graphql";

const prisma = new PrismaClient();
var anime = require('./pokemon.json');
@ObjectType()
export class ConvertJson {

    async createCategory() {
        const exist = await prisma.quizzCategory.findUnique({
            where: {
                name: anime.thème
            }
        })
        if(!exist) {
            const category = await prisma.quizzCategory.create({
                data: {
                    name: anime.thème,
                },
            });
            return category
        }
        else {
            return exist
        }
    }

    async createQuizz(quizzCategory) {
        if (quizzCategory.name === anime.thème) {
            const quizz = await prisma.quizz.create({
                data: {
                    name: anime.title,
                    quizzCategoryId: quizzCategory.id,
                    status: 1,
                    details: ""
                },
            });
            return quizz
        }
    }

    createQuestionEasy(quizz) {
        if (quizz.name === anime.title) {
            const quizzQuestion = anime.quizz.fr.débutant.map((res) =>
                 prisma.quizzQuestion.create({
                    data: {
                        title: res.question,
                        quizzId: quizz.id,
                        points: 10,
                        level: 1
                    },
                })
            )
            return Promise.all(quizzQuestion)


        }
    }
    createQuestionMid(quizz) {
        if (quizz.name === anime.title) {
            const quizzQuestion = anime.quizz.fr.confirmé.map((res) =>
                prisma.quizzQuestion.create({
                    data: {
                        title: res.question,
                        quizzId: quizz.id,
                        points: 20,
                        level: 2
                    },
                })
            )
            return Promise.all(quizzQuestion)


        }
    }
    createQuestionHard(quizz) {
        if (quizz.name === anime.title) {
            const quizzQuestion = anime.quizz.fr.expert.map((res) =>
                prisma.quizzQuestion.create({
                    data: {
                        title: res.question,
                        quizzId: quizz.id,
                        points: 30,
                        level: 3
                    },
                })
            )
            return Promise.all(quizzQuestion)


        }
    }



    createAnswerEasy(quizzQuestion) {
        var isGood
        anime.quizz.fr.débutant.map((res) => {
            quizzQuestion.map((resu) => {
                if (res.question === resu.title) {
                    res.propositions.map((result) => {
                        if (result === res.réponse) {
                            isGood = true
                        } else {
                            isGood = false
                        }
                        const quizzAnswer = prisma.quizzAnswer.create({
                            data: {
                                name: result,
                                quizzQuestionId: resu.id,
                                isGood: isGood
                            },
                        });
                        return Promise.all([quizzAnswer])

                    })
                }

            })
        })

    }
    createAnswerMid(quizzQuestion) {
        var isGood
        anime.quizz.fr.confirmé.map((res) => {
            quizzQuestion.map((resu) => {
                if (res.question === resu.title) {
                    res.propositions.map((result) => {
                        if (result === res.réponse) {
                            isGood = true
                        } else {
                            isGood = false
                        }
                        const quizzAnswer = prisma.quizzAnswer.create({
                            data: {
                                name: result,
                                quizzQuestionId: resu.id,
                                isGood: isGood
                            },
                        });
                        return Promise.all([quizzAnswer])

                    })
                }

            })
        })

    }
    createAnswerHard(quizzQuestion) {
        var isGood
        anime.quizz.fr.expert.map((res) => {
            quizzQuestion.map((resu) => {
                if (res.question === resu.title) {
                    res.propositions.map((result) => {
                        if (result === res.réponse) {
                            isGood = true
                        } else {
                            isGood = false
                        }
                        const quizzAnswer = prisma.quizzAnswer.create({
                            data: {
                                name: result,
                                quizzQuestionId: resu.id,
                                isGood: isGood
                            },
                        });
                        return Promise.all([quizzAnswer])

                    })
                }

            })
        })

    }
}
