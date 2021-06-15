import { STORE_NAME } from './../stores/stores.schema';
import { BannerStatus } from './dto/banner-enum';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { USER_NAME } from '../users/users.schema';

@Schema({ timestamps: true })
export class BannerModel {
    @Prop({ required: true })
    url: string;

    @Prop({ required: true })
    order: number;

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: USER_NAME })
    createBy: string;

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: STORE_NAME })
    storeOwner: string;

    @Prop({ default: BannerStatus.ACTIVE })
    status: BannerStatus;
}

export type BannerDocument = BannerModel & Document;

export const BANNER_NAME = 'Banner';

export const BannerSchema = SchemaFactory.createForClass(BannerModel);
