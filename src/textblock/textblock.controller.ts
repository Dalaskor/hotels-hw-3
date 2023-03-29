import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { ROLES } from 'src/consts/roles';
import { CreateTextblockDto } from './dto/create-textblock.dto';
import { Textblock } from './textblock.model';
import { TextblockService } from './textblock.service';

@ApiTags('Текстовые блоки')
@Controller('textblock')
export class TextblockController {
    constructor(private textblockService: TextblockService) {}

    @ApiOperation({ summary: 'Создание нового текстового блока' })
    @ApiResponse({ status: 200, type: Textblock })
    @Roles(ROLES.ADMIN)
    @UseGuards(RolesGuard)
    @Post()
    create(@Body() textblockDto: CreateTextblockDto) {
        return this.textblockService.create(textblockDto);
    }

    @ApiOperation({ summary: 'Получить список всех тектовых блоков' })
    @ApiResponse({ status: 200, type: [Textblock] })
    @Roles(ROLES.ADMIN)
    @UseGuards(RolesGuard)
    @Get()
    getAll() {
        return this.textblockService.getAll();
    }

    @ApiOperation({ summary: 'Получить текстовый блок по уникальному имени' })
    @ApiResponse({ status: 200, type: Textblock })
    @Roles(ROLES.ADMIN)
    @UseGuards(RolesGuard)
    @Get("/:name")
    getOneByName(@Param('name') name: string) {
        return this.textblockService.getOneByName(name);
    }

    @ApiOperation({ summary: 'Редактировать текстовый блок по имени' })
    @ApiResponse({ status: 200, type: Textblock })
    @Roles(ROLES.ADMIN)
    @UseGuards(RolesGuard)
    @Put("/:name")
    update(@Param('name') name: string, @Body() dto: CreateTextblockDto) {
        return this.textblockService.update(name, dto);
    }

    @ApiOperation({ summary: 'Удалить текстовый блок по имени' })
    @ApiResponse({ status: 200, type: Textblock })
    @Roles(ROLES.ADMIN)
    @UseGuards(RolesGuard)
    @Delete("/:name")
    delete(@Param('name') name: string) {
        return this.textblockService.delete(name);
    }
}
