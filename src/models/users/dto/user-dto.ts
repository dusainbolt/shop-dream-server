import { PackageDTO } from './../../package/dto/package-dto';
import { lengthMessage } from './../../../common/valid_message';
import { IsEmail, Length } from 'class-validator';
import { Field, ObjectType, ID, InputType } from '@nestjs/graphql';
import { Gender, Role, UserStatus } from './user-enum';
@ObjectType()
export class User {
    @Field(() => ID)
    id?: string;

    @Field()
    email: string;

    @Field()
    firstName: string;

    @Field()
    lastName: string;

    @Field()
    password: string;

    @Field()
    avatar: string;

    @Field()
    phone: string;

    @Field()
    facebook: string;

    @Field(() => Gender)
    gender: Gender;

    @Field(() => Role)
    role: Role;

    @Field(() => UserStatus)
    status: UserStatus;

    @Field()
    createdAt?: Date;

    @Field()
    updatedAt?: Date;
}

@InputType()
export class InitUser {
    @IsEmail()
    email: string;

    @Length(1, 25, { message: lengthMessage })
    firstName: string;

    @Length(1, 25, { message: lengthMessage })
    lastName: string;

    @Field()
    avatar: string;

    @Field()
    password: string;

    @Field()
    phone: string;

    @Field()
    facebook: string;

    @Field()
    gender: Gender;

    @Field()
    role: Role;
}
