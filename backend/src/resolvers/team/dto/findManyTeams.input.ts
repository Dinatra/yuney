import { InputType, Field } from '@nestjs/graphql';
import {IsNotEmpty} from "class-validator";
import {User} from "../../../models/user.model";

@InputType()
export class FindManyTeamsInput {
    @Field({nullable: true})
    name?: string;
    @Field({nullable: true})
    status?: boolean;
    @Field({nullable: true})
    event?: string;
}