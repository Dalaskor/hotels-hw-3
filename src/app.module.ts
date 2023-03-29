import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { AbilityModule } from './ability/ability.module';
import { TextblockModule } from './textblock/textblock.module';

@Module({
    controllers: [],
    providers: [],
    imports: [
        // Переменные окружения
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`,
        }),
        // Конфигурация ORM
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [],
            autoLoadModels: true,
        }),
        UsersModule,
        RolesModule,
        AuthModule,
        ProfileModule,
        AbilityModule,
        TextblockModule,
    ],
})
export class AppModule {}
