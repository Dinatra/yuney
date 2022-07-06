import { InputType, Field } from '@nestjs/graphql';
import {IsNotEmpty} from "class-validator";

@InputType()
export class CreateTeamInput {
    @IsNotEmpty()
    @Field()
    name                : string;

    @Field({ nullable: true })
    biography?          : string;

    @Field({ nullable: true })
    image?              : string;

    @Field()
    status              : boolean;

    @IsNotEmpty()
    @Field()
    uniqueCode         : string;

}
