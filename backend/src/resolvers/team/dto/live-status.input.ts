import { InputType, Field } from '@nestjs/graphql';
import {IsNotEmpty, MaxLength} from 'class-validator';

@InputType()
export class LiveStatusInput {
    @Field()
    @IsNotEmpty()
    on_stream: boolean;
}
