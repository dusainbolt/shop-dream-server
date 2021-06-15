import { Field, ObjectType, InputType, ID } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { FontStatus } from './font-enum';

@ObjectType()
export class Font {
    @Field(() => ID)
    readonly id?: string;

    @Field()
    name: string;

    @Field()
    url: string;

    @Field(() => FontStatus)
    status: FontStatus;

    @Field()
    createBy: string;

    @Field()
    createdAt?: Date;

    @Field()
    updatedAt?: Date;
}

@InputType()
export class initFont {
    @Field()
    name: string;

    @Field()
    url: string;

    @Field(() => MongooseSchema.Types.ObjectId)
    createBy: string;
}
