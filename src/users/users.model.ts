import { ApiProperty } from '@nestjs/swagger';
import {
    BelongsToMany,
    Column,
    DataType,
    Model,
    Table,
} from 'sequelize-typescript';
import { Role } from 'src/roles/roles.model';
import { UserRoles } from 'src/user_roles/user-roles.model';

// Интерфейс с атрибутами, которые требуются для создания записи в БД
interface UserCreationAttrs {
    email: string;
    password: string;
}

/**
    * Модель пользователя
 */
@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
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
        example: 'user@mail.ru',
        description: 'Электронная почта пользователя',
    })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    email: string;

    @ApiProperty({
        example: 'password12345',
        description: 'Пароль пользователя',
    })
    @Column({ type: DataType.STRING, allowNull: false })
    password: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];
}
