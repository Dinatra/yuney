import { Field, ObjectType, InputType } from "@nestjs/graphql";
import { QuizzCategory } from "./quizzCategory.model";
import {QuizzQuestion} from "./quizzQuestion.model";

@ObjectType("PartyHistory")
@InputType("PartyHistoryInput")
export class PartyHistory {
    id:                      string
    name:                    string
    points:                  number
    partyId?:                 string
    usersId:                 string
}
