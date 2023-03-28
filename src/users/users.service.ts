import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ROLES } from 'src/consts/roles';
import { RolesService } from 'src/roles/roles.service';
import { AddRoleDto } from './dto/add-role.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';

@Injectable()
export class UsersService {
    // Инъекции
    constructor(
        @InjectModel(User) private userRepository: typeof User,
        private roleService: RolesService,
    ) {}

    /**
     * Сервис для создания объекта User
     * @param {CreateUserDto} dto DTO для создания объекта модели User
     */
    async CreateUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto);
        const role = await this.roleService.getRoleByValue(ROLES.USER);

        await user.$set('roles', [role.id]);
        user.roles = [role];

        return user;
    }

    /**
     * Сервис для получения всех объектов модели User
     */
    async getAllUsers() {
        const users = await this.userRepository.findAll({
            include: { all: true },
        });

        return users;
    }

    /**
     * Сервис для получения объекта User по полю email
     * @param {string} email Поле для электронной почты в объекте User
     */
    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne({
            where: { email },
            include: { all: true },
        });

        return user;
    }

    /**
     * Сервис для изменения роли пользователя
     * @param {AddRoleDto} dto DTO для присвоения роли пользователию
     */
    async addRole(dto: AddRoleDto) {
        const user = await this.userRepository.findByPk(dto.userId);
        const role = await this.roleService.getRoleByValue(dto.value);

        if (role && user) {
            await user.$add('role', role.id);
            return dto;
        }

        throw new HttpException(
            'Пользователь или роль не найдены',
            HttpStatus.NOT_FOUND,
        );
    }

    /**
     * Сервис для удаления роли у пользователя
     * @param {AddRoleDto} dto DTO для присвоения роли пользователию
     */
    async removeRole(dto: AddRoleDto) {
        const user = await this.userRepository.findByPk(dto.userId);
        const role = await this.roleService.getRoleByValue(dto.value);

        if (role && user) {
            await user.$remove('role', role.id);
            return dto;
        }

        throw new HttpException(
            'Пользователь или роль не найдены',
            HttpStatus.NOT_FOUND,
        );
    }
}
