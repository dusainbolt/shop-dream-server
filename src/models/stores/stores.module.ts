import { MongooseModule } from '@nestjs/mongoose';
import { STORE_NAME, StoreSchema } from './stores.schema';
import { Module } from '@nestjs/common';
import { StoresService } from './stores.service';
import { StoresResolver } from './stores.resolver';

@Module({
    imports: [MongooseModule.forFeature([{ name: STORE_NAME, schema: StoreSchema }])],
    providers: [StoresService, StoresResolver],
    exports: [StoresService],
})
export class StoresModule {}
