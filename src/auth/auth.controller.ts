import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';

@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {
    // Инъекция сервиса для модели Auth
    constructor(private authService: AuthService) {}

    /**
     * Endpoint для post запроса на авторизацию пользователия
     * @param {CreateUserDto} userDto DTO для модели User
     */
    @ApiOperation({ summary: 'Авторизация пользователия' })
    @ApiResponse({ status: 200, type: Object })
    @Post('/login')
    login(@Body() userDto: CreateUserDto) {
        return this.authService.login(userDto);
    }

    /**
     * Endpoint для post запроса на регистрацию пользователия
     * @param {CreateUserDto} userDto DTO для модели User
     */
    @ApiOperation({ summary: 'Регистрация нового пользователия' })
    @ApiResponse({ status: 200, type: Object })
    @Post('/registration')
    registration(@Body() userDto: CreateUserDto) {
        return this.authService.registration(userDto);
    }
}
