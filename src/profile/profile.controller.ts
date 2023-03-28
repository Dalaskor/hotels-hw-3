import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Profile } from './profile.model';
import { ProfileService } from './profile.service';

@ApiTags('Профили пользователей')
@Controller('profile')
export class ProfileController {
    constructor(private profileService: ProfileService) {}

    @ApiOperation({
        summary: 'Получить профиль по идентификатору пользователя модели User',
    })
    @ApiResponse({ status: 200, type: Profile })
    @Get('/:id')
    getById(@Param('id') id: number) {
        return this.profileService.getById(id);
    }
}
