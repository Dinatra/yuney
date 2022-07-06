import { InputType, Field } from '@nestjs/graphql';
import {IsNotEmpty} from "class-validator";

@InputType()
export class UpdateTeamInput {
    @Field()
    id                : string;
    @Field({ nullable: true })
    name?                : string;
    @Field({ nullable: true })
    biography?          : string;
    @Field({ nullable: true })
    image?              : string;
    @Field({ nullable: true})
    updatedAt           : Date;
    // @Field({ nullable: true })
    // Users_team?          : Users_team[];
    // @Field({ nullable: true })
    // Global_ranking?      : Global_ranking[];
    // @Field({ nullable: true })
    // Monthly_ranking?     : Monthly_ranking[];
    // @Field({ nullable: true })
    // Weekly_ranking?      : Weekly_ranking[];
    // @Field({ nullable: true })
    // Evenements?          : Evenements[];
}
