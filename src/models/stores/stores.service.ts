import { Store } from './dto/store-dto';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { STORE_NAME, StoreDocument } from './stores.schema';
import { Model } from 'mongoose';

@Injectable()
export class StoresService {
    constructor(@InjectModel(STORE_NAME) public storeModel: Model<StoreDocument>) {}

    async findById(storeId: string): Promise<Store> {
        return this.storeModel.findById(storeId);
    }
}
