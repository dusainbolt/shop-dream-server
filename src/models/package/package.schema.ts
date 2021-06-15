import { ObjectType, registerEnumType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { USER_NAME } from '../users/users.schema';
import { PackageStatus } from './dto/package-enum';

@Schema({ timestamps: true })
@ObjectType()
export class PackageModel {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    price: number;

    @Prop({ required: true })
    period: number;

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: USER_NAME })
    createBy: string;

    @Prop({ default: PackageStatus.ACTIVE })
    status: PackageStatus;
}

export type PackageDocument = PackageModel & Document;

export const PACKAGE_NAME = 'Package';

export const PackageSchema = SchemaFactory.createForClass(PackageModel);
