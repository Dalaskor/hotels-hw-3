import { ApiProperty } from '@nestjs/swagger';
import {
    BelongsTo,
    Column,
    DataType,
    Model,
    Table,
} from 'sequelize-typescript';
import { User } from 'src/users/users.model';

// Интерфейс с атрибутами, которые требуются для создания записи в БД
interface ProfileCreationAttrs {
    name: string;
    surname: string;
    middlename: string;
    phone: string;
    location: string;
    bio: string;
}

/**
 * Модель профиля пользователя
 */
@Table({ tableName: 'profiles' })
export class Profile extends Model<Profile, ProfileCreationAttrs> {
    @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ApiProperty({ example: 'Иван', description: 'Имя пользователя' })
    @Column({ type: DataType.STRING, allowNull: true, defaultValue: '' })
    name: string;

    @ApiProperty({ example: 'Иванов', description: 'Фамилия пользователя' })
    @Column({ type: DataType.STRING, allowNull: true, defaultValue: '' })
    surname: string;

    @ApiProperty({ example: 'Иванович', description: 'Отчество пользователя' })
    @Column({ type: DataType.STRING, allowNull: true, defaultValue: '' })
    middlename: string;

    @ApiProperty({
        example: '+7(777)3228989',
        description: 'Номер телефона пользователя',
    })
    @Column({ type: DataType.STRING, allowNull: true, defaultValue: '' })
    phone: string;

    @ApiProperty({
        example: 'Москва',
        description: 'Местоположение пользователя',
    })
    @Column({ type: DataType.STRING, allowNull: true, defaultValue: '' })
    location: string;

    @ApiProperty({
        example: 'Работал в Google',
        description: 'Небольшая биография пользователя',
    })
    @Column({ type: DataType.TEXT, allowNull: true, defaultValue: '' })
    bio: string;

    @BelongsTo(() => User, 'fk_profileid')
    user: User;

    @Column({ type: DataType.INTEGER, allowNull: false, unique: true })
    fk_profileid: number;
}
