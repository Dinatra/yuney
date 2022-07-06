import { Field, ObjectType, InputType } from "@nestjs/graphql";
import {PartyHistory} from "./partyHistory.model";

@ObjectType("Party")
@InputType("PartyInput")
export class Party {
    id:                      string
    startedAt:               Date
    endedAt:                 Date
    name:                    string
    points:                  number
    @Field(() => PartyHistory)
    partyHistory?:          PartyHistory;
    usersId:               string

}
