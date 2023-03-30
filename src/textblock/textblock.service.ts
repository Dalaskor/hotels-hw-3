import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from 'src/files/files.service';
import { CreateTextblockDto } from './dto/create-textblock.dto';
import { Textblock } from './textblock.model';

@Injectable()
export class TextblockService {
    constructor(
        @InjectModel(Textblock) private textblockRepository: typeof Textblock,
        private fileService: FilesService,
    ) {}

    async create(dto: CreateTextblockDto, image: any) {
        const checkName = await this.textblockRepository.findOne({
            where: { name: dto.name },
        });

        if (checkName) {
            throw new HttpException(
                'Текстовый блок с таким именем уже существует!',
                HttpStatus.BAD_REQUEST,
            );
        }

        const fileName = await this.fileService.createFile(image);
        const textblock = await this.textblockRepository.create({
            ...dto,
            image: fileName,
        });

        await this.fileService.saveFileWithName(
            fileName,
            'textblocks',
            textblock.id,
        );

        return textblock;
    }

    async getAll(query) {
        if (query.group) {
            // Фильтрация по группе через query параметры
            const textblocks = await this.textblockRepository.findAll({
                where: { group: query.group },
            });
            return textblocks;
        } else {
            const textblocks = await this.textblockRepository.findAll();
            return textblocks;
        }
    }

    async getOneByName(name: string) {
        const textblock = await this.textblockRepository.findOne({
            where: { name },
        });

        if (!textblock) {
            throw new HttpException(
                'Текстового блока с таким именем не существует!',
                HttpStatus.BAD_REQUEST,
            );
        }

        return textblock;
    }

    async update(name: string, dto: CreateTextblockDto, image) {
        const textblock = await this.textblockRepository.findOne({
            where: { name },
        });

        const fileName = await this.fileService.createFile(image);
        if (textblock) {
            textblock.set('name', dto.name);
            textblock.set('title', dto.title);
            textblock.set('text', dto.text);
            textblock.set('group', dto.group);
            textblock.set('image', fileName);
            textblock.save();

            return textblock;
        }

        throw new HttpException(
            'Текстового блока с таким именем не существует!',
            HttpStatus.BAD_REQUEST,
        );
    }

    async delete(name: string) {
        const textblock = await this.textblockRepository.findOne({
            where: { name },
        });

        if (textblock) {
            await this.fileService.stopUsing(textblock.image);
            await textblock.destroy();

            return 'Объект успешно удален';
        }

        throw new HttpException(
            'Текстового блока с таким именем не существует!',
            HttpStatus.BAD_REQUEST,
        );
    }
}
