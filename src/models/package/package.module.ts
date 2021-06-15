import { PACKAGE_NAME, PackageSchema } from './package.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { PackageService } from './package.service';
import { PackageResolver } from './package.resolver';

@Module({
    imports: [MongooseModule.forFeature([{ name: PACKAGE_NAME, schema: PackageSchema }])],
    providers: [PackageService, PackageResolver],
    exports: [PackageService],
})
export class PackageModule {}
