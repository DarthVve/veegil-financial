import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';

@InputType()
export class CreateUserInput {
    @IsString()
    @Field()
    fullname: string;

    @IsNotEmpty()
    @IsEmail()
    @Field()
    email: string;

    @IsNotEmpty()
    @IsPhoneNumber()
    @Field()
    phone: string;

    @IsString()
    @Field()
    password: string;
}