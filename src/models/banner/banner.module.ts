import { BannerSchema, BANNER_NAME } from './banner.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { BannerService } from './banner.service';
import { BannerResolver } from './banner.resolver';

@Module({
    imports: [MongooseModule.forFeature([{ name: BANNER_NAME, schema: BannerSchema }])],
    providers: [BannerService, BannerResolver],
    exports: [BannerService],
})
export class BannerModule {}
