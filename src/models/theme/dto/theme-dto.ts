import { ThemeStatus } from './theme-enum';
import { Field, ObjectType, InputType, ID } from '@nestjs/graphql';
import { Font } from 'src/models/font/dto/font-dto';

@ObjectType()
export class Theme {
    @Field(() => ID)
    readonly id?: string;

    @Field()
    name: string;

    @Field(() => Font)
    font: string;

    @Field()
    backgroundColor: string;

    @Field(() => ThemeStatus)
    status: ThemeStatus;

    @Field()
    createBy: string;

    @Field()
    createdAt?: Date;

    @Field()
    updatedAt?: Date;
}

@InputType()
export class initTheme {
    @Field()
    name?: string;

    @Field()
    backgroundColor?: string;

    @Field()
    primaryColor?: string;

    @Field()
    font?: string;

    @Field()
    createBy?: string;
}
