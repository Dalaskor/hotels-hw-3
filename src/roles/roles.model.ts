import { ApiProperty } from '@nestjs/swagger';
import {
    BelongsToMany,
    Column,
    DataType,
    Model,
    Table,
} from 'sequelize-typescript';
import { User } from 'src/users/users.model';
import { UserRoles } from 'src/user_roles/user-roles.model';

interface RoleCreationAttrs {
    value: string;
    description: string;
}

/**
 * Модель роли пользователя
 */
@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreationAttrs> {
    @ApiProperty({ example: '1', description: 'Уникальный идентификатор роли' })
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ApiProperty({
        example: 'SELLER',
        description: 'Наименование роли пользователя',
    })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    value: string;

    @ApiProperty({
        example: 'Продавец',
        description: 'Описание роли пользователя',
    })
    @Column({ type: DataType.STRING, allowNull: false })
    description: string;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[];
}
