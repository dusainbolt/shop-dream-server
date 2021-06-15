import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BANNER_NAME, BannerDocument } from './banner.schema';

@Injectable()
export class BannerService {
    constructor(@InjectModel(BANNER_NAME) public bannerModel: Model<BannerDocument>) {}
}
