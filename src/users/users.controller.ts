import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    // Инъекция сервиса для модели User
    constructor(private usersService: UsersService) {}

    /**
     * Endpoint для post запроса на создание объекта модели User 
     * @param {CreateUserDto} userDto DTO для модели User
     */
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.CreateUser(userDto);
    }

    /**
     * Endpoint для get запроса на получение всех пользователей
     */
    @Get()
    getAll() {
        return this.usersService.getAllUsers();
    }
}
