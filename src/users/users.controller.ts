import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';
import { UsersService } from './users.service';

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {
    // Инъекция сервиса для модели User
    constructor(private usersService: UsersService) {}

    /**
     * Endpoint для post запроса на создание объекта модели User
     * @param {CreateUserDto} userDto DTO для модели User
     */
    @ApiOperation({ summary: 'Создание нового пользователя' })
    @ApiResponse({ status: 200, type: User })
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.CreateUser(userDto);
    }

    /**
     * Endpoint для get запроса на получение всех пользователей
     */
    @ApiOperation({ summary: 'Получить список всех пользователей' })
    @ApiResponse({ status: 200, type: [User] })
    @Get()
    getAll() {
        return this.usersService.getAllUsers();
    }
}
