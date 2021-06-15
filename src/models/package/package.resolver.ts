import { PackageService } from './package.service';
import { Package } from './dto/package-dto';
import { Resolver, Query } from '@nestjs/graphql';

@Resolver(() => Package)
export class PackageResolver {
    constructor(private readonly packageService: PackageService) {}

    @Query(() => [Package])
    async packages(): Promise<Package[]> {
        return this.packageService.findAll();
    }

    // @ResolveField()
    // async datacreateBy(@Parent() packageResolve: PackageDocument) {
    //     const data = await packageResolve.populate({ path: 'createBy', model: User.name }).execPopulate();
    //     console.log('aaaa', data);
    //     return {};
    // }
}
