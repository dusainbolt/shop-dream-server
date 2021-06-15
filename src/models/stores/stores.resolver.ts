import { THEME_NAME } from './../theme/theme.schema';
import { StoreDocument } from './stores.schema';
import { Resolver, Args, Query, Parent, ResolveField } from '@nestjs/graphql';
import { Store } from './dto/store-dto';
import { StoresService } from './stores.service';

@Resolver(() => Store)
export class StoresResolver {
    constructor(private readonly storeService: StoresService) {}
    @Query(() => Store)
    async store(@Args('storeId') storeId: string): Promise<Store> {
        return this.storeService.findById(storeId);
    }

    @ResolveField()
    async theme(@Parent() storeResolve: StoreDocument) {
        await storeResolve.populate({ path: 'theme', model: THEME_NAME }).execPopulate();
        return storeResolve.theme;
    }
}
