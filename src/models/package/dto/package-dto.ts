import { Field, ObjectType, InputType, ID } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { PackageStatus } from './package-enum';

@ObjectType()
export class PackageDTO {
    @Field(() => ID)
    id?: string;

    @Field()
    name: string;

    @Field()
    price: number;

    @Field()
    period: number;

    @Field()
    createBy: string;

    @Field(() => PackageStatus)
    status: PackageStatus;

    @Field()
    createdAt?: Date;

    @Field()
    updatedAt?: Date;
}

@InputType()
export class initPackageDTO {
    @Field()
    name?: string;

    @Field()
    price?: number;

    @Field()
    period?: number;

    @Field(() => MongooseSchema.Types.ObjectId)
    createBy?: string;
}
