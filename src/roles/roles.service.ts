import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './roles.model';

@Injectable()
export class RolesService {
    // Инъекции
    constructor(@InjectModel(Role) private roleRepository: typeof Role) {}

    /**
     * Сервис для создания объекта Role
     */
    async createRole(dto: CreateRoleDto) {
        const role = await this.roleRepository.create(dto);

        return role;
    }

    /**
     * Сервис для получения всех объектов модели Role
     */
    async getAllRoles() {
        const roles = this.roleRepository.findAll({ include: { all: true } });
        
        return roles;
    }

    /**
     * Сервис для получения объекта Role по полю value
     * @param {string} value Поле для именования роли в объекте Role
     */
    async getRoleByValue(value: string) {
        const role = await this.roleRepository.findOne({ where: { value } });

        return role;
    }
}
