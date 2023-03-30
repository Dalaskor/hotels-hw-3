import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface FilesCreationAttrs {}

@Table({ tableName: 'files', updatedAt: false })
export class File extends Model<File, FilesCreationAttrs> {
    @ApiProperty({
        example: '1',
        description: 'Уникальный идентификатор пользователя',
    })
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ApiProperty({
        example: 'file_name.jpg',
        description: 'Имя файла сгенерированное после отправки изображения',
    })
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    fileName: string;

    @ApiProperty({
        example: 'profile',
        description: 'Сущность где используется данный файл',
    })
    @Column({ type: DataType.STRING })
    essenceTable: string;

    @ApiProperty({
        example: '1',
        description: 'Идентификатор в сущности где используется данный файл',
    })
    @Column({ type: DataType.INTEGER })
    essenceId: number;
}
