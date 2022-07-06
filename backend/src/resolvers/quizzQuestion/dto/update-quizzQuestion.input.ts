import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateQuizzQuestionInput {
    @Field()
    id: string;

    @Field({ nullable: true })
    title?: string;
}
