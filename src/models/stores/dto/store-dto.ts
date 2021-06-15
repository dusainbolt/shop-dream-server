import { StoreStatus } from './store-enum';
import { IsEmail } from 'class-validator';
import { Schema as MongooseSchema } from 'mongoose';
import { ID, ObjectType, Field, InputType } from '@nestjs/graphql';
import { Theme } from 'src/models/theme/dto/theme-dto';

@ObjectType('StoreContact')
@InputType('StoreContactInput')
export class StoreContact {
    @Field()
    hotline: string;
    @Field()
    phone: string;
    @Field()
    address: string;
    @Field(() => [String])
    branchAddress: string[];
    @Field()
    openingHours: string;
    @Field()
    closeHours: string;
}

@ObjectType('StoreSocial')
@InputType('StoreSocialInput')
export class StoreSocial {
    @Field()
    facebookPage: string;
    @Field()
    tiktok: string;
    @Field()
    zalo: string;
    @Field()
    youtube: string;
    @Field()
    twitter: string;
    @Field()
    instagram: string;
}

@ObjectType()
export class Store {
    @Field(() => ID)
    readonly id?: string;

    @Field()
    email: string;

    @Field()
    name: string;

    @Field()
    logo: string;

    @Field()
    logoName: string;

    @Field()
    descriptionLogo: string;

    @Field()
    storeContact: StoreContact;

    @Field()
    storeSocial: StoreSocial;

    @Field()
    createBy: string;

    @Field(() => Theme)
    theme: string;

    @Field()
    package: string;

    @Field(() => StoreStatus)
    status: StoreStatus;

    @Field()
    endPackageAt: Date;

    @Field()
    trial: boolean;
}

@InputType()
export class InitStore {
    @IsEmail()
    email: string;

    @Field()
    name: string;

    @Field()
    logo: string;

    @Field()
    logoName: string;

    @Field()
    descriptionLogo: string;

    @Field()
    storeContact: StoreContact;

    @Field()
    storeSocial: StoreSocial;

    @Field()
    createBy: string;

    @Field()
    theme: string;

    @Field()
    package: string;

    @Field()
    endPackageAt: Date;

    @Field()
    trial: boolean;
}
