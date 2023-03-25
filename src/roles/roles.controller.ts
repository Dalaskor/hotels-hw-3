import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
    // Инъекция сервиса модели Role
    constructor(private roleService: RolesService) {}

    /**
     * Endpoint для post запроса на создание объекта модели Role
     * @param {CreateRoleDto} roleDto DTO для модели Role
     */
    @Post()
    create(@Body() roleDto: CreateRoleDto) {
        return this.roleService.createRole(roleDto);
    }

    /**
     * Endpoint для get запроса на получение объекта модели Role по полю value
     * @param {string} value Поле value в модели Role
     */
    @Get()
    getAll() {
        return this.roleService.getAllRoles();
    }

    /**
     * Endpoint для get запроса на получение объекта модели Role по полю value
     * @param {string} value Поле value в модели Role
     */
    @Get('/:value')
    getByValue(@Param('value') value: string) {
        return this.roleService.getRoleByValue(value);
    }
}
