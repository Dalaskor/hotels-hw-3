import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateRoleDto {
    @ApiProperty({
        example: 'SELLER',
        description: 'Наименование роли пользователя',
    })
    @IsString({ message: 'Должно быть строкой' })
    readonly value: string;

    @ApiProperty({
        example: 'Продавец',
        description: 'Описание роли пользователя',
    })
    @IsString({ message: 'Должно быть строкой' })
    readonly description: string;
}
