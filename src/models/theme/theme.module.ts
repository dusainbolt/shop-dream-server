import { ThemeSchema, THEME_NAME } from './theme.schema';
import { Module } from '@nestjs/common';
import { ThemeService } from './theme.service';
import { ThemeResolver } from './theme.resolver';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [MongooseModule.forFeature([{ name: THEME_NAME, schema: ThemeSchema }])],
    providers: [ThemeService, ThemeResolver],
    exports: [ThemeService],
})
export class ThemeModule {}
