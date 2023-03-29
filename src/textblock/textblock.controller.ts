import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query,
    UploadedFile,
    UseGuards,
    UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
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
    @UseInterceptors(FileInterceptor('image'))
    create(
        @Body() textblockDto: CreateTextblockDto,
        @UploadedFile() image: any,
    ) {
        return this.textblockService.create(textblockDto, image);
    }

    @ApiOperation({
        summary:
            'Получить список всех тектовых блоков или с фильтром по группе через query параметры',
    })
    @ApiResponse({ status: 200, type: [Textblock] })
    @Roles(ROLES.ADMIN)
    @UseGuards(RolesGuard)
    @Get()
    getAll(@Query() query) {
        return this.textblockService.getAll(query);
    }

    @ApiOperation({ summary: 'Получить текстовый блок по уникальному имени' })
    @ApiResponse({ status: 200, type: Textblock })
    @Roles(ROLES.ADMIN)
    @UseGuards(RolesGuard)
    @Get('/:name')
    getOneByName(@Param('name') name: string) {
        return this.textblockService.getOneByName(name);
    }

    @ApiOperation({ summary: 'Редактировать текстовый блок по имени' })
    @ApiResponse({ status: 200, type: Textblock })
    @Roles(ROLES.ADMIN)
    @UseGuards(RolesGuard)
    @Put('/:name')
    @UseInterceptors(FileInterceptor('image'))
    update(
        @Param('name') name: string,
        @Body() dto: CreateTextblockDto,
        @UploadedFile() image: any,
    ) {
        return this.textblockService.update(name, dto, image);
    }

    @ApiOperation({ summary: 'Удалить текстовый блок по имени' })
    @ApiResponse({ status: 200, type: Textblock })
    @Roles(ROLES.ADMIN)
    @UseGuards(RolesGuard)
    @Delete('/:name')
    delete(@Param('name') name: string) {
        return this.textblockService.delete(name);
    }
}
