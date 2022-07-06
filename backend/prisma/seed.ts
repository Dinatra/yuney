import { PrismaClient } from "@prisma/client";
import * as dotenv from "dotenv";
import { ConvertJson } from "./convertJson"
const prisma = new PrismaClient();


const convertJson = new ConvertJson


async function main() {
  dotenv.config();
  console.log("Seeding...");

  const category = await convertJson.createCategory()

  const quizz = await convertJson.createQuizz(category)

  const quizzQuestionEasy = await convertJson.createQuestionEasy(quizz)
  const quizzQuestionMid = await convertJson.createQuestionMid(quizz)
  const quizzQuestionHard = await convertJson.createQuestionHard(quizz)

  const quizzAnswerEasy = await convertJson.createAnswerEasy(quizzQuestionEasy)
  const quizzAnswerMid = await convertJson.createAnswerMid(quizzQuestionMid)
  const quizzAnswerHard = await convertJson.createAnswerHard(quizzQuestionHard)

}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
