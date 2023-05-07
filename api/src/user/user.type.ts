import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType('User')
export class UserType {
    @Field((type) => ID)
    id: string;

    @Field()
    fullname: string;

    @Field()
    email: string;

    @Field()
    phone: string;

    @Field()
    wallet: number;

    @Field()
    password: string;
};
