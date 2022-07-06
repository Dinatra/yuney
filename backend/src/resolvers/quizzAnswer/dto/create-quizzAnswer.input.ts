import { InputType, Field } from '@nestjs/graphql';
import {IsNotEmpty} from "class-validator";
import {Optional} from "@nestjs/common";
import {Quizz} from "../../../models/quizz.model";

@InputType()
export class CreateQuizzAnswerInput {
    @Field({ nullable: true })
    name: string;

    @Field()
    isGood: boolean;

    @Field()
    quizzQuestionId: string;
}
