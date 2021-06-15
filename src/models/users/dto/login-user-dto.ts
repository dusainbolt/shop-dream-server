import { InputType, Field } from '@nestjs/graphql';
@InputType()
export class LoginUser {
    @Field()
    readonly credential: string;

    @Field()
    readonly password: string;
}
