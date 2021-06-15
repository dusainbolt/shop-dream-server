import { PackageService } from './package.service';
import { PackageDTO } from './dto/package-dto';
import { Resolver, Query } from '@nestjs/graphql';

@Resolver(() => PackageDTO)
export class PackageResolver {
    constructor(private readonly packageService: PackageService) {}

    @Query(() => [PackageDTO])
    async packages(): Promise<PackageDTO[]> {
        return this.packageService.findAll();
    }

    // @ResolveField()
    // async datacreateBy(@Parent() packageResolve: PackageDocument) {
    //     const data = await packageResolve.populate({ path: 'createBy', model: User.name }).execPopulate();
    //     console.log('aaaa', data);
    //     return {};
    // }
}
