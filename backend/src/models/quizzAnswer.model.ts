import {
    Field,
    ObjectType,
    registerEnumType,
    HideField, InputType,
} from '@nestjs/graphql';
import {QuizzQuestion} from "./quizzQuestion.model";
import {Quizz} from "./quizz.model";


@ObjectType("QuizzAnswer")
@InputType("QuizzAnswerInput")
export class QuizzAnswer {
    id              :string;
    name            :string;
    isGood          :boolean;
    quizzQuestionId :string;

}