import {
    Field,
    ObjectType,
    registerEnumType,
    HideField, InputType,
} from '@nestjs/graphql';
import {Quizz} from "./quizz.model";
import {QuizzAnswer} from "./quizzAnswer.model";


class QuizzQAnswer {
}

@ObjectType("QuizzQuestion")
@InputType("QuizzQuestionInput")
export class QuizzQuestion {
    id                : string
    title             : string
    quizzId           : string
    points            : number
    level            : number
    @Field(() => [QuizzAnswer])
    quizzAnswer: QuizzAnswer[];
}