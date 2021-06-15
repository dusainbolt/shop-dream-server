import { urlInitFont } from './font/font.schema';
import { PackageService } from './package/package.service';
import { PackageDTO, initPackageDTO } from './package/dto/package-dto';
import { FontModule } from './font/font.module';
import { ThemeModule } from './theme/theme.module';
import { StoresService } from './stores/stores.service';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { Module } from '@nestjs/common';
import { StoresModule } from './stores/stores.module';
import { InitUser, User } from './users/dto/user-dto';
import { PackageModule } from './package/package.module';
import { Gender, Role } from './users/dto/user-enum';
import { Font, initFont } from './font/dto/font-dto';
import { ThemeService } from './theme/theme.service';
import { FontService } from './font/font.service';
import { Theme, initTheme } from './theme/dto/theme-dto';
import { InitStore, Store } from './stores/dto/store-dto';
@Module({
    imports: [UsersModule, StoresModule, ThemeModule, FontModule, PackageModule],
})
export class ModelsModule {
    constructor(
        private usersService: UsersService,
        private storesService: StoresService,
        private themeService: ThemeService,
        private fontService: FontService,
        private packageService: PackageService
    ) {
        this.initData();
    }

    async initUser(): Promise<User> {
        const data: InitUser = {
            email: 'demo@gmail.com',
            firstName: 'Du',
            lastName: 'Le',
            avatar: 'https://appdu-storage.s3-ap-southeast-1.amazonaws.com/118005360_928999227584443_8060562362571425079_o.png',
            password: '123456',
            role: Role.ADMIN,
            gender: Gender.MALE,
            phone: '84328111597',
            facebook: 'https://www.facebook.com/dusainbolt/',
        };
        return new this.usersService.userModel(data).save();
    }

    async initPackage(ownerId: string): Promise<PackageDTO> {
        const data: initPackageDTO = {
            name: 'Package Sliver',
            price: 399999,
            period: 30,
            createBy: ownerId,
        };
        return new this.packageService.packageModel(data).save();
    }

    async initFont(ownerId: string): Promise<Font> {
        const data: initFont = {
            name: `'Roboto', sans-serif`,
            url: urlInitFont,
            createBy: ownerId,
        };
        return new this.fontService.fontModel(data).save();
    }

    async initTheme(ownerId: string, fontId: string): Promise<Theme> {
        const data: initTheme = {
            name: 'Sainbolt Light Theme',
            backgroundColor: '#E5E5E5',
            createBy: ownerId,
            primaryColor: '#FB5831',
            font: fontId,
        };
        return new this.themeService.themeModel(data).save();
    }

    // async initStore(ownerId: string, fontId: string): Promise<Store> {
    //     const data: InitStore = {
    //         name: 'Sainbolt Store',
    //         email: 'dulh181199@gmail.com',
    //         // storesService: '',
    //         // theme: ''
    //         // createBy: ownerId,
    //         // primaryColor: '#FB5831',
    //         // font: fontId,
    //     };
    //     return new this.storesService.storeModel(data).save();
    // }

    async initData() {
        const users = await this.usersService.userModel.find();
        if (!users.length) {
            // create user
            const userCreate = await this.initUser();
            console.log(userCreate);

            // create package
            const packageCreate = await this.initPackage(userCreate.id);
            console.log(packageCreate);

            // create font
            const fontCreate = await this.initFont(userCreate.id);
            console.log(fontCreate);

            //create theme
            const themeCreate = await this.initTheme(userCreate.id, fontCreate.id);
            console.log(themeCreate);

            //create theme
            // const storeCreate = await this.initStore(userCreate.id, fontCreate.id);
            // console.log(themeCreate);
        }
    }
}
