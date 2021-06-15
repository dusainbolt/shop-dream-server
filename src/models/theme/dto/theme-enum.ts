import { registerEnumType } from '@nestjs/graphql';

export enum ThemeStatus {
    INACTIVE,
    ACTIVE,
}

registerEnumType(ThemeStatus, {
    name: 'ThemeStatus',
    description: 'The status theme.',
    valuesMap: {
        INACTIVE: {
            deprecationReason: 'This is theme inactive by ADMIN',
        },
        ACTIVE: {
            deprecationReason: 'This is theme active by ADMIN',
        },
    },
});
