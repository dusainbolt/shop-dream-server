import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { PACKAGE_NAME, PackageDocument } from './package.schema';
import { Model } from 'mongoose';
import { Package, initPackage } from './dto/package-dto';

@Injectable()
export class PackageService {
    constructor(@InjectModel(PACKAGE_NAME) public packageModel: Model<PackageDocument>) {}
    async findAll(input: initPackage = {}): Promise<Package[]> {
        return this.packageModel.find({ ...input });
    }
}
