import { registerEnumType } from '@nestjs/graphql';

export enum StoreStatus {
    INACTIVE,
    ACTIVE,
}

registerEnumType(StoreStatus, {
    name: 'StoreStatus',
    description: 'The status store.',
    valuesMap: {
        INACTIVE: {
            deprecationReason: 'This is store not renew',
        },
        ACTIVE: {
            deprecationReason: 'This is store active',
        },
    },
});
