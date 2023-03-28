import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
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

    /**
     * Сервис для редактирования объекта модели Profile
     * @param {CreateProfileDto} dto DTO с данными для Profile
     */
    async updateProfile(dto: UpdateProfileDto) {
        const profile = await this.getById(dto.userId);

        if (profile) {
            profile.set('name', dto.name);
            profile.set('surname', dto.surname);
            profile.set('middlename', dto.middlename);
            profile.set('phone', dto.phone);
            profile.set('location', dto.location);
            profile.set('bio', dto.bio);
            profile.save();

            return dto;
        }

        throw new HttpException(
            'Пользователь или роль не найдены',
            HttpStatus.NOT_FOUND,
        );
    }
}
