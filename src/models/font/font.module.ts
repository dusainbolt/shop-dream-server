import { FontSchema, FONT_NAME } from './font.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { FontService } from './font.service';
import { FontResolver } from './font.resolver';

@Module({
    imports: [MongooseModule.forFeature([{ name: FONT_NAME, schema: FontSchema }])],
    providers: [FontService, FontResolver],
    exports: [FontService],
})
export class FontModule {}
