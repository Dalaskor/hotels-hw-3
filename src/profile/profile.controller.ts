import {
    Body,
    Controller,
    ForbiddenException,
    Get,
    Param,
    Put,
    Req,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
    AbilityFactory,
    Action,
} from 'src/ability/ability.factory/ability.factory';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './profile.model';
import { ProfileService } from './profile.service';

@ApiTags('Профили пользователей')
@Controller('profile')
export class ProfileController {
    constructor(
        private profileService: ProfileService,
        private abilityFactory: AbilityFactory,
    ) {}

    @ApiOperation({ summary: 'Редактировать профиль пользователя' })
    @ApiResponse({ status: 200, type: CreateProfileDto })
    @Put('/:userId')
    updateById(
        @Body() dto: UpdateProfileDto,
        @Param('userId') userId: number,
        @Req() req: Request,
    ) {
        return this.profileService.updateProfile(userId, dto, req);
    }

    @ApiOperation({
        summary: 'Получить профиль по идентификатору пользователя модели User',
    })
    @ApiResponse({ status: 200, type: Profile })
    @Get('/:id')
    getById(@Req() req: Request, @Param('id') id: number) {
        const user = this.profileService.getUserFromReq(req);
        const ability = this.abilityFactory.profileForUser(user);

        const isAllowed = ability.can(Action.Read, Profile);

        if (!isAllowed) {
            throw new ForbiddenException('Нет доступа');
        }

        return this.profileService.getById(id);
    }
}
