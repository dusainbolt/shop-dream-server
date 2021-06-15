import { InputType, Field, ObjectType } from '@nestjs/graphql';
import { BannerStatus } from './banner-enum';

@ObjectType()
export class Banner {
    @Field()
    url: string;

    @Field()
    order: number;

    @Field()
    createBy: string;

    @Field()
    storeOwner: string;
    @Field(() => BannerStatus)
    status: string;
}

@InputType()
export class initBanner {
    @Field()
    url: string;

    @Field()
    order: number;

    @Field()
    createBy: string;

    @Field()
    storeOwner: string;
}
