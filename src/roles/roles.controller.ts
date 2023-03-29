import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { ROLES } from 'src/consts/roles';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './roles.model';
import { RolesService } from './roles.service';

@ApiTags('Роли')
@Controller('roles')
export class RolesController {
    // Инъекция сервиса модели Role
    constructor(private roleService: RolesService) {}

    /**
     * Endpoint для post запроса на создание объекта модели Role
     * @param {CreateRoleDto} roleDto DTO для модели Role
     */
    @ApiOperation({ summary: 'Создание новой роли' })
    @ApiResponse({ status: 200, type: Role })
    @Roles(ROLES.ADMIN)
    @UseGuards(RolesGuard)
    @Post()
    create(@Body() roleDto: CreateRoleDto) {
        return this.roleService.createRole(roleDto);
    }

    /**
     * Endpoint для get запроса на получение всех объектов модели Role
     */
    @ApiOperation({ summary: 'Получить список всех ролей' })
    @ApiResponse({ status: 200, type: [Role] })
    @Get()
    getAll() {
        return this.roleService.getAllRoles();
    }

    /**
     * Endpoint для get запроса на получение объекта модели Role по полю value
     * @param {string} value Поле value в модели Role
     */
    @ApiOperation({ summary: 'Получить роль по полю value' })
    @ApiResponse({ status: 200, type: Role })
    @Get('/:value')
    getByValue(@Param('value') value: string) {
        return this.roleService.getRoleByValue(value);
    }
}
