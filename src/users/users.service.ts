import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';

@Injectable()
export class UsersService {
    // Инъекции
    constructor(@InjectModel(User) private userRepository: typeof User) {}

    /**
     * Сервис для создания объекта User
     */
    async CreateUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto);

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
