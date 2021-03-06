import { PACKAGE_NAME } from './../package/package.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { THEME_NAME } from '../theme/theme.schema';
import { USER_NAME } from '../users/users.schema';
import { StoreContact, StoreSocial } from './dto/store-dto';
import { StoreStatus } from './dto/store-enum';
@Schema({ timestamps: true })
export class StoreModel {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    logo: string;

    @Prop()
    logoName: string;

    @Prop({ required: true })
    descriptionLogo: string;

    @Prop()
    storeContact: StoreContact;

    @Prop()
    storeSocial: StoreSocial;

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: USER_NAME })
    createBy: string;

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: THEME_NAME })
    theme: string;

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: PACKAGE_NAME })
    package: string;

    @Prop({ required: true })
    endPackageAt: Date;

    @Prop({ type: StoreStatus, default: StoreStatus.ACTIVE })
    status: StoreStatus;

    @Prop()
    trial: boolean;
}

export type StoreDocument = StoreModel & Document;

export const STORE_NAME = 'Store';

export const StoreSchema = SchemaFactory.createForClass(StoreModel);
