import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { ROLES } from 'src/consts/roles';
import { CreateTextblockDto } from './dto/create-textblock.dto';
import { Textblock } from './textblock.model';
import { TextblockService } from './textblock.service';

@Controller('textblock')
export class TextblockController {
    constructor(private textblockService: TextblockService) {}

    @ApiOperation({ summary: 'Создание нового пользователя' })
    @ApiResponse({ status: 200, type: Textblock })
    @Roles(ROLES.ADMIN)
    @UseGuards(RolesGuard)
    @Post()
    create(@Body() textblockDto: CreateTextblockDto) {
        // return this.usersService.CreateUser(userDto);
    }

}
