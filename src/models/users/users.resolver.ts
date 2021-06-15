import { PackageService } from '../package/package.service';
import { User } from 'src/models/users/dto/user-dto';
import { Logger } from '@nestjs/common';
import { UsersService } from './users.service';
import { Resolver, Args, Mutation, Query, ResolveField, Parent } from '@nestjs/graphql';
import { UserDocument } from './users.schema';
@Resolver(() => User)
export class UsersResolver {
    private readonly logger = new Logger(UsersResolver.name);

    constructor(private readonly usersService: UsersService, private readonly packageService: PackageService) {}

    // @Mutation(returns => User)
    // async createUser(@Args('input') input: CreateUser): Promise<User> {
    //     // this.logger.debug(`createUser => input: ${JSON.stringify(input)}`);
    //     return this.usersService.create(input);
    // }

    // @Mutation(returns => String)
    // async login(@Args('input') input: LoginUser): Promise<string> {
    //     // this.logger.debug(`login => input: ${JSON.stringify(input)}`);
    //     return this.usersService.login(input);
    // }

    // @Roles(Role.ADMIN, Role.USER)
    @Query(() => [User])
    async users(): Promise<User[]> {
        this.logger.debug('Query users {...}');
        return this.usersService.findAll();
    }

    // @ResolveField()
    // async package(@Parent() user: UserDocument) {
    //     return await this.packageService.findAll({ createBy: user.id });
    // }
}
