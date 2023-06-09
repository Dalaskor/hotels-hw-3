import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
    @ApiProperty({
        example: 'user@mail.ru',
        description: 'Электронная почта пользователя',
    })
    @IsString({ message: 'Должно быть строкой' })
    @IsEmail({}, { message: 'Некорректный email' })
    readonly email: string;

    @ApiProperty({
        example: 'password12345',
        description: 'Пароль пользователя',
    })
    @IsString({ message: 'Должно быть строкой' })
    @Length(6, 24, {
        message: 'Длина пароля должна быть не меньше 6 и не больше 24',
    })
    readonly password: string;

    // For profile
    @ApiProperty({
        example: 'Иван',
        description: 'Имя пользователя',
    })
    @IsString({ message: 'Должно быть строкой' })
    readonly name: string;

    @ApiProperty({
        example: 'Иванов',
        description: 'Фамилия пользователя',
    })
    @IsString({ message: 'Должно быть строкой' })
    readonly surname: string;

    @ApiProperty({
        example: 'Иванович',
        description: 'Отчество пользователя',
    })
    @IsString({ message: 'Должно быть строкой' })
    readonly middlename: string;

    @ApiProperty({
        example: '+7(666)777-2343',
        description: 'Номер телефона пользователя',
    })
    @IsString({ message: 'Должно быть строкой' })
    readonly phone: string;

    @ApiProperty({
        example: 'Москва',
        description: 'Местоположение пользователя',
    })
    @IsString({ message: 'Должно быть строкой' })
    readonly location: string;

    @ApiProperty({
        example: 'Работал в Yandex',
        description: 'Небольшая биография пользователя',
    })
    @IsString({ message: 'Должно быть строкой' })
    readonly bio: string;
}
