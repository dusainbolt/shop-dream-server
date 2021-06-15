import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { USER_NAME } from '../users/users.schema';
import { FontStatus } from './dto/font-enum';

@Schema({ timestamps: true })
export class FontModel {
    @Prop({ unique: true, required: true })
    name: string;

    @Prop()
    url: string;

    @Prop({ default: FontStatus.ACTIVE })
    status: FontStatus;

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: USER_NAME })
    createBy: string;
}

export type FontDocument = FontModel & Document;

export const FONT_NAME = 'Font';

export const FontSchema = SchemaFactory.createForClass(FontModel);

export const urlInitFont = `https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap`;
