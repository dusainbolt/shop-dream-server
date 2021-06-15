import { InjectModel } from '@nestjs/mongoose';
import { FontDocument, FONT_NAME } from './font.schema';
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class FontService {
    constructor(@InjectModel(FONT_NAME) public fontModel: Model<FontDocument>) {}
}
