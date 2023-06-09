import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
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
     * Endpoint для get запроса на получение пользователя по id
     * @param {number} id Идентификатор пользователя в модели User
     */
    @ApiOperation({ summary: 'Получить пользователя по id' })
    @ApiResponse({ status: 200, type: User })
    @Roles(ROLES.ADMIN)
    @UseGuards(RolesGuard)
    @Get('/:id')
    getById(@Param('id') id: number) {
        return this.usersService.getUserById(id);
    }

    /**
     * Endpoint для post запроса на присвоение новой роли пользователю
     */
    @ApiOperation({ summary: 'Выдать роль пользователю' })
    @ApiResponse({ status: 200 })
    @Roles(ROLES.ADMIN)
    @UseGuards(RolesGuard)
    @Put('/role')
    addRole(@Body() dto: AddRoleDto) {
        return this.usersService.addRole(dto);
    }

    /**
     * Endpoint для post запроса на присвоение новой роли пользователю
     */
    @ApiOperation({ summary: 'Удалить роль пользователю' })
    @ApiResponse({ status: 200 })
    @Roles(ROLES.ADMIN)
    @UseGuards(RolesGuard)
    @Put('/role-remove')
    removeRole(@Body() dto: AddRoleDto) {
        return this.usersService.removeRole(dto);
    }
}
