import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AbilityModule } from 'src/ability/ability.module';
import { AuthModule } from 'src/auth/auth.module';
import { User } from 'src/users/users.model';
import { ProfileController } from './profile.controller';
import { Profile } from './profile.model';
import { ProfileService } from './profile.service';

@Module({
    controllers: [ProfileController],
    providers: [ProfileService],
    imports: [
        SequelizeModule.forFeature([Profile, User]),
        forwardRef(() => AuthModule),
        AbilityModule
    ],
    exports: [ProfileService],
})
export class ProfileModule {}
