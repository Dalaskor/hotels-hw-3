import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTextblockDto } from './dto/create-textblock.dto';
import { Textblock } from './textblock.model';

@Injectable()
export class TextblockService {
    constructor(@InjectModel(Textblock) private textblockRepository: typeof Textblock) {}

    async create(dto: CreateTextblockDto) {}
}
