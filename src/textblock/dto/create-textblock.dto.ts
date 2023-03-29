import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateTextblockDto {
    @ApiProperty({ example: 'main-hero-text', description: 'Уникальное имя' })
    @IsString({ message: 'Должно быть строкой' })
    readonly name: string;

    @ApiProperty({
        example: 'Обычный заголовок',
        description: 'Название текстбокса',
    })
    @IsString({ message: 'Должно быть строкой' })
    readonly title: string;

    @ApiProperty({ example: 'lorem ipsum...', description: 'Основной текст' })
    @IsString({ message: 'Должно быть строкой' })
    readonly text: string;

    @ApiProperty({
        example: 'path/to/image',
        description: 'Путь до изображения',
    })
    @IsString({ message: 'Должно быть строкой' })
    readonly image: string;

    @ApiProperty({
        example: 'main-page',
        description: 'Группа для более удобного составления запроса',
    })
    @IsString({ message: 'Должно быть строкой' })
    readonly group: string;
}
