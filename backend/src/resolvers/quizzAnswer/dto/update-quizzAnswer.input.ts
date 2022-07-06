import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateQuizzAnswerInput {
    @Field()
    id: string;

    @Field()
    name?: string;

    @Field()
    isGood?: boolean
}
