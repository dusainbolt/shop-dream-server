import { registerEnumType } from '@nestjs/graphql';

export enum BannerStatus {
    INACTIVE,
    ACTIVE,
}

registerEnumType(BannerStatus, {
    name: 'BannerStatus',
    description: 'The status banner.',
    valuesMap: {
        INACTIVE: {
            deprecationReason: 'This is banner inactive by Store',
        },
        ACTIVE: {
            deprecationReason: 'This is banner active by Store',
        },
    },
});
