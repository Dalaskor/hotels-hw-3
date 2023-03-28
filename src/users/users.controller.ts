import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { ROLES } from 'src/consts/roles';
import { AddRoleDto } from './dto/add-role.dto';
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
    @Roles(ROLES.ADMIN)
    @UseGuards(RolesGuard)
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.CreateUser(userDto);
    }

    /**
     * Endpoint для get запроса на получение всех пользователей
     */
    @ApiOperation({ summary: 'Получить список всех пользователей' })
    @ApiResponse({ status: 200, type: [User] })
    @Roles(ROLES.ADMIN)
    @UseGuards(RolesGuard)
    @Get()
    getAll() {
        return this.usersService.getAllUsers();
    }

    /**
     * Endpoint для post запроса на присвоение новой роли пользователю
     */
    @ApiOperation({ summary: 'Выдать роль пользователю' })
    @ApiResponse({ status: 200 })
    @Roles(ROLES.ADMIN)
    @UseGuards(RolesGuard)
    @Post('/role')
    addRole(@Body() dto: AddRoleDto) {
        return this.usersService.addRole(dto);
    }
}
