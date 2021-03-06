import { PackageModule } from './../package/package.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { UserSchema, USER_NAME } from './users.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: USER_NAME, schema: UserSchema }]), PackageModule],
    providers: [UsersService, UsersResolver],
    exports: [UsersService],
})
export class UsersModule {}
