import {
    ForbiddenException,
    HttpException,
    HttpStatus,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import {
    AbilityFactory,
    Action,
} from 'src/ability/ability.factory/ability.factory';
import { CreateProfileDto } from './dto/create-profile.dto';
import { Profile } from './profile.model';

@Injectable()
export class ProfileService {
    // Инъекции
    constructor(
        @InjectModel(Profile) private profileRepository: typeof Profile,
        private jwtService: JwtService,
        private abilityFactory: AbilityFactory,
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
    async updateProfile(userId: number, dto: CreateProfileDto, req) {
        const profile = await this.profileRepository.findOne({
            where: { fk_profileid: userId },
            include: { all: true },
        });

        const user = this.getUserFromReq(req);
        const ability = this.abilityFactory.profileForUser(user);
        const isAllowed = ability.can(Action.Update, profile);

        if (!isAllowed) {
            throw new ForbiddenException('Нет доступа');
        }

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

        throw new HttpException('Пользователь не найден', HttpStatus.NOT_FOUND);
    }

    getUserFromReq(req) {
        const authHeader = req.headers.authorization;

        if (authHeader === undefined) {
            throw new UnauthorizedException({
                message: 'Пользователь не авторизован',
            });
        }

        const bearer = authHeader.split(' ')[0];
        const token = authHeader.split(' ')[1];

        if (bearer !== 'Bearer' || !token) {
            throw new UnauthorizedException({
                message: 'Пользователь не авторизован',
            });
        }

        const user = this.jwtService.verify(token);

        return user;
    }
}
