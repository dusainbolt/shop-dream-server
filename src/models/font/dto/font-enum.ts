import { registerEnumType } from '@nestjs/graphql';

export enum FontStatus {
    INACTIVE,
    ACTIVE,
}

registerEnumType(FontStatus, {
    name: 'FontStatus',
    description: 'The status font.',
    valuesMap: {
        INACTIVE: {
            deprecationReason: 'This is font inactive by ADMIN',
        },
        ACTIVE: {
            deprecationReason: 'This is font active by ADMIN',
        },
    },
});
