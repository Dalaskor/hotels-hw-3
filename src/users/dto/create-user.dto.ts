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
}
