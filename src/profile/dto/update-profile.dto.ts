import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class UpdateProfileDto {
    @ApiProperty({ example: '1', description: 'Идентификатор пользователя' })
    @IsNumber({}, { message: 'Должно быть числом' })
    readonly userId: number;

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
