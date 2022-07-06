import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateQuizzCategoryInput {
    @Field()
    id: string;

    @Field({ nullable: true })
    name?: string;
}
