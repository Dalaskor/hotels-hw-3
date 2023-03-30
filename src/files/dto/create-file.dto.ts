import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateFileDto {
    @ApiProperty({
        example: 'profile',
        description: 'Сущность где используется данный файл',
    })
    @IsString({ message: 'Должно быть строкой' })
    readonly essenceTable: string;

    @ApiProperty({
        example: '1',
        description: 'Идентификатор в сущности где используется данный файл',
    })
    @IsNumber({}, { message: 'Должно быть целым числом' })
    readonly essenceId: number;
}
