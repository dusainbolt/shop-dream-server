import { ThemeService } from './theme.service';
import { Resolver, Query } from '@nestjs/graphql';
import { Theme } from './dto/theme-dto';
import { FONT_NAME } from './../font/font.schema';
import { ResolveField, Parent } from '@nestjs/graphql';
import { ThemeDocument } from './theme.schema';
@Resolver(() => Theme)
export class ThemeResolver {
    constructor(private readonly themeService: ThemeService) {}

    @Query(() => [Theme])
    async themes(): Promise<Theme[]> {
        return this.themeService.findAll();
    }

    @ResolveField()
    async font(@Parent() themeResolve: ThemeDocument) {
        await themeResolve.populate({ path: 'font', model: FONT_NAME }).execPopulate();
        return themeResolve.font;
    }
}
