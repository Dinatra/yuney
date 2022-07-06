import { Field, ObjectType, InputType } from "@nestjs/graphql";
import { QuizzCategory } from "./quizzCategory.model";
import {QuizzQuestion} from "./quizzQuestion.model";

@ObjectType("Quizz")
@InputType("QuizzInput")
export class Quizz {
  id: string;
  name: string;
  status?: number;
  details?: string;
  quizzCategoryId: string;
  @Field(() => [QuizzQuestion])
  quizzQuestion: QuizzQuestion[];
}
