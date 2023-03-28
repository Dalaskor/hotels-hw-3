import {
    HttpException,
    HttpStatus,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/users.model';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs';
import { CreateProfileDto } from 'src/profile/dto/create-profile.dto';
import { ProfileService } from 'src/profile/profile.service';

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private profileService: ProfileService,
        private jwtService: JwtService,
    ) {}

    async login(userDto: CreateUserDto) {
        const user = await this.validateUser(userDto);
        return this.generateToken(user);
    }

    async registration(dto: CreateUserDto) {
        const candidate = await this.userService.getUserByEmail(dto.email);

        if (candidate) {
            throw new HttpException(
                'Пользователь с такой электронной почтой уже существует',
                HttpStatus.BAD_REQUEST,
            );
        }

        const hashPassword = await bcrypt.hash(dto.password, 5);
        const user = await this.userService.CreateUser({
            ...dto,
            password: hashPassword,
        });

        const profileDto: CreateProfileDto = {
            name: dto.name,
            surname: dto.surname,
            middlename: dto.middlename,
            phone: dto.phone,
            location: dto.location,
            bio: dto.bio,
        };
        const profile = await this.profileService.createProfile(profileDto);
        user.$set('profile', profile);

        return this.generateToken(user);
    }

    private async generateToken(user: User) {
        const payload = { email: user.email, id: user.id, roles: user.roles };

        return {
            token: this.jwtService.sign(payload),
        };
    }

    private async validateUser(userDto: CreateUserDto) {
        const user = await this.userService.getUserByEmail(userDto.email);
        const passwordEquals = await bcrypt.compare(
            userDto.password,
            user.password,
        );

        if (user && passwordEquals) {
            return user;
        }

        throw new UnauthorizedException({
            message: 'Неккоректные электронная почта или пароль',
        });
    }
}
