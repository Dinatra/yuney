import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateQuizzInput {
  @Field()
  id: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  details?: string;
}
