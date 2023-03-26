import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ROLES } from 'src/consts/roles';
import { RolesService } from 'src/roles/roles.service';
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
}
