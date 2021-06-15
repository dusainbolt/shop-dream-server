import { initTheme, Theme } from './dto/theme-dto';
import { ThemeDocument, THEME_NAME } from './theme.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class ThemeService {
    constructor(@InjectModel(THEME_NAME) public themeModel: Model<ThemeDocument>) {}

    async findAll(input: initTheme = {}): Promise<Theme[]> {
        return this.themeModel.find({ ...input });
    }
}
