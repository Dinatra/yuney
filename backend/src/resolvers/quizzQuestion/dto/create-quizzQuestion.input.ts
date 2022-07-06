import { InputType, Field } from '@nestjs/graphql';
import {IsNotEmpty} from "class-validator";
import {Optional} from "@nestjs/common";
import {Quizz} from "../../../models/quizz.model";

@InputType()
export class CreateQuizzQuestionInput {
    @Field({ nullable: true })
    title: string;

    @Field()
    quizzId: string;

    @Field()
    points: number;

    @Field()
    level: number;
}
