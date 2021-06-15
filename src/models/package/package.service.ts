import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { PACKAGE_NAME, PackageDocument } from './package.schema';
import { Model } from 'mongoose';
import { PackageDTO, initPackageDTO } from './dto/package-dto';

@Injectable()
export class PackageService {
    constructor(@InjectModel(PACKAGE_NAME) public packageModel: Model<PackageDocument>) {}
    async findAll(input: initPackageDTO = {}): Promise<PackageDTO[]> {
        return this.packageModel.find({ ...input });
    }
}
