import { BannerService } from './banner.service';
import { Resolver } from '@nestjs/graphql';

@Resolver()
export class BannerResolver {
    constructor(private readonly bannerService: BannerService) {}
}
