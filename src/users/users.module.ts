import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users.model';
import { Role } from 'src/roles/roles.model';
import { UserRoles } from 'src/user_roles/user-roles.model';
import { RolesModule } from 'src/roles/roles.module';
import { AuthModule } from 'src/auth/auth.module';
import { Profile } from 'src/profile/profile.model';
import { ProfileModule } from 'src/profile/profile.module';

@Module({
    providers: [UsersService],
    controllers: [UsersController],
    imports: [
        SequelizeModule.forFeature([User, Profile, Role, UserRoles]),
        RolesModule,
        ProfileModule,
        forwardRef(() => AuthModule),
    ],
    exports: [UsersService],
})
export class UsersModule {}
