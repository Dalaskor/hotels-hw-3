import { ApiProperty } from '@nestjs/swagger';
import { Model } from 'sequelize';
import { Column, DataType, Table } from 'sequelize-typescript';

interface TextblockCreationAttrs {
    name: string;
    title: string;
    text: string;
    image: string;
    group: string;
}

@Table({ tableName: 'textblocks' })
export class Textblock extends Model<Model, TextblockCreationAttrs> {
    @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ApiProperty({ example: 'main-hero-text', description: 'Уникальное имя' })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    name: string;

    @ApiProperty({
        example: 'Обычный заголовок',
        description: 'Название текстбокса',
    })
    @Column({ type: DataType.STRING, defaultValue: 'title' })
    title: string;

    @ApiProperty({ example: 'lorem ipsum...', description: 'Основной текст' })
    @Column({
        type: DataType.TEXT,
        defaultValue: 'description',
    })
    text: string;

    @ApiProperty({
        example: 'path/to/image',
        description: 'Путь до изображения',
    })
    @Column({ type: DataType.STRING })
    image: string;

    @ApiProperty({
        example: 'main-page',
        description: 'Группа для более удобного составления запроса',
    })
    @Column({
        type: DataType.STRING,
        defaultValue: 'main',
    })
    group: string;
}
