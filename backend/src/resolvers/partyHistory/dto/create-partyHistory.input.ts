import { InputType, Field } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";
import { Optional } from "@nestjs/common";
import { QuizzCategory } from "../../../models/quizzCategory.model";

@InputType()
export class CreatePartyHistoryInput {
  @IsNotEmpty()
  @Field()
  name: string;

  @Field()
  points: number;

  @Field()
  partyId: string;

  @Field()
  usersId: string;
}
