import {
    Body,
    Controller,
    Post,
    UploadedFile,
    UseGuards,
    UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { ROLES } from 'src/consts/roles';
import { CreateFileDto } from './dto/create-file.dto';
import { File } from './files.model';
import { FilesService } from './files.service';

@ApiTags('Файлы')
@Controller('files')
export class FilesController {
    constructor(private fileService: FilesService) {}

    @ApiOperation({ summary: 'Сохранение файла в базу данных' })
    @ApiResponse({ status: 200, type: File })
    @Roles(ROLES.USER)
    @UseGuards(RolesGuard)
    @Post()
    @UseInterceptors(FileInterceptor('image'))
    create(@Body() dto: CreateFileDto, @UploadedFile() image: any) {
        this.fileService.saveFile(image, dto);
    }

    @ApiOperation({ summary: 'Удалить неиспользуемые файлы' })
    @ApiResponse({ status: 200, type: File })
    @Roles(ROLES.ADMIN)
    @UseGuards(RolesGuard)
    @Post('/remove-not-used')
    removeOld() {
        this.fileService.deleteAllTempFiles();
    }
}
