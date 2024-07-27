import { InputType, Field, ObjectType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

@InputType()
export class ForgotPasswordInput {
    @Field()
    @IsEmail()
    email: string;
}

@ObjectType()
export class ForgotPasswordResponse {
  @Field()
  success: boolean;

  @Field({ nullable: true })
  message?: string;
}


@ObjectType()
export class ResetPassResponse {
  @Field()
  success: boolean;

  @Field()
  message: string;
}