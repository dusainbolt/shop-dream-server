import { registerEnumType } from '@nestjs/graphql';

export enum PackageStatus {
    INACTIVE,
    ACTIVE,
}

registerEnumType(PackageStatus, {
    name: 'PackageStatus',
    description: 'The status package.',
    valuesMap: {
        INACTIVE: {
            deprecationReason: 'This is package inactive by ADMIN',
        },
        ACTIVE: {
            deprecationReason: 'This is package active by ADMIN',
        },
    },
});
