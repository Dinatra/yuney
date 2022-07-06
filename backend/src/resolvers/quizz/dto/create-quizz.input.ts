import { InputType, Field } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";
import { Optional } from "@nestjs/common";
import { QuizzCategory } from "../../../models/quizzCategory.model";

@InputType()
export class CreateQuizzInput {
  @IsNotEmpty()
  @Field()
  name: string;

  @Field({ nullable: true })
  details?: string;

  @Field({ nullable: true })
  status: number;

  @Field()
  quizzCategoryId: string;
}
