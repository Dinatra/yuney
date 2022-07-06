import { InputType, Field } from '@nestjs/graphql';
import {Team} from "../../../models/team.model";

@InputType()
export class updateUsersTeams {
    @Field()
    teamId: string;
}
