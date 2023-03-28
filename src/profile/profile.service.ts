import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProfileDto } from './dto/create-profile.dto';
import { Profile } from './profile.model';

@Injectable()
export class ProfileService {
    // Инъекции
    constructor(
        @InjectModel(Profile) private profileRepository: typeof Profile,
    ) {}

    /**
     * Сервис для создания объекта модели Profile
     * @param {CreateProfileDto} dto DTO для создания объекта модели Profile
     */
    async createProfile(dto: CreateProfileDto) {
        const profile = this.profileRepository.create(dto);

        return profile;
    }

    /**
     * Сервис для получения объекта Profile по идентификатору модели User
     * @param {number} fk_profileid Идентификатор пользователя из модели User
     */
    async getById(fk_profileid: number) {
        const profile = await this.profileRepository.findOne({
            where: { fk_profileid },
            include: { all: true },
        });

        return profile;
    }
}
