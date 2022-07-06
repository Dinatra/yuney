import { InputType, Field } from '@nestjs/graphql';
import {IsNotEmpty} from "class-validator";
import {Optional} from "@nestjs/common";

@InputType()
export class CreateQuizzCategoryInput {
    @IsNotEmpty()
    @Field()
    name                : string;
}
