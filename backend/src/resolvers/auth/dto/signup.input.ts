import { IsEmail, IsNotEmpty, MinLength, IsDateString } from "class-validator";
import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class SignupInput {
  @Field({ nullable: false })
  @IsEmail()
  email: string;

  @Field({ nullable: false })
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @Field({ nullable: false })
  nickname: string;

  @Field({ nullable: false })
  @IsDateString()
  birthdate: string;
}
