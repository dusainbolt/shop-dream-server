import { ThemeStatus } from './dto/theme-enum';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { FONT_NAME } from '../font/font.schema';
import { USER_NAME } from '../users/users.schema';

@Schema({ timestamps: true })
export class ThemeModel {
    @Prop({ unique: true, required: true })
    name: string;

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: FONT_NAME })
    font: string;

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: USER_NAME })
    createBy: string;

    @Prop()
    backgroundColor: string;

    @Prop()
    primaryColor: string;

    @Prop({ default: ThemeStatus.ACTIVE })
    status: ThemeStatus;

    @Prop()
    showBanner: boolean;
}

export type ThemeDocument = ThemeModel & Document;

export const THEME_NAME = 'Theme';

export const ThemeSchema = SchemaFactory.createForClass(ThemeModel);
