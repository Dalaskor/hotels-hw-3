import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTextblockDto } from './dto/create-textblock.dto';
import { Textblock } from './textblock.model';

@Injectable()
export class TextblockService {
    constructor(
        @InjectModel(Textblock) private textblockRepository: typeof Textblock,
    ) {}

    async create(dto: CreateTextblockDto) {
        const checkName = await this.textblockRepository.findOne({
            where: { name: dto.name },
        });

        if (checkName) {
            throw new HttpException(
                'Текстовый блок с таким именем уже существует!',
                HttpStatus.BAD_REQUEST,
            );
        }

        const textblock = await this.textblockRepository.create(dto);

        return textblock;
    }

    async getAll() {
        const textblocks = await this.textblockRepository.findAll();

        return textblocks;
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

    async update(name: string, dto: CreateTextblockDto) {
        const textblock = await this.textblockRepository.findOne({
            where: { name },
        });

        if (textblock) {
            textblock.set('name', dto.name);
            textblock.set('title', dto.title);
            textblock.set('text', dto.text);
            textblock.set('image', dto.image);
            textblock.set('group', dto.group);
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
            await textblock.destroy();

            return 'Объект успешно удален';
        }

        throw new HttpException(
            'Текстового блока с таким именем не существует!',
            HttpStatus.BAD_REQUEST,
        );
    }
}
