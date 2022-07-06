import { Field, ObjectType, InputType } from "@nestjs/graphql";
import { Quizz } from "./quizz.model";

@ObjectType("QuizzCategory")
@InputType("QuizzCategoryInput")
export class QuizzCategory {
  @Field()
  id: string;
  @Field()
  name: string;
  @Field(() => [Quizz])
  quizz: Quizz[];
}
