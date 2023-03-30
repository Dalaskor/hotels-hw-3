import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import * as uuid from 'uuid';
import { InjectModel } from '@nestjs/sequelize';
import { File } from './files.model';
import { CreateFileDto } from './dto/create-file.dto';

@Injectable()
export class FilesService {
    constructor(@InjectModel(File) private filesRepository: typeof File) {}

    /**
     * Запись файла
     * @param {any} file Загруженный файл
     */
    async createFile(file: any): Promise<string> {
        try {
            const fileName = uuid.v4() + '.jpg';
            const filePath = path.resolve(__dirname, '..', 'static');

            if (!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath, { recursive: true });
            }

            fs.writeFileSync(path.join(filePath, fileName), file.buffer);

            return fileName;
        } catch (e) {
            throw new HttpException(
                'Произошла ошибка при записи файла',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    /**
     * Сохранение файла в базу данных
     * @param {any} file Загруженный файл
     * @param {CreateFileDto} dto DTO с полями essenceTable и essenceId
     */
    async saveFile(file: any, dto: CreateFileDto) {
        const fileName = await this.createFile(file);

        const newFile = await this.filesRepository.create({ ...dto, fileName });

        return newFile;
    }

    async saveFileWithName(
        fileName: string,
        essenceTable: string,
        essenceId: number,
    ) {
        const newFile = await this.filesRepository.create({
            fileName,
            essenceTable,
            essenceId,
        });

        return newFile;
    }

    /**
     * Удаляет все файлы, у который время создания больше часа и нигде не используются
     */
    async deleteAllTempFiles() {
        let count = 0;
        const curDateTime = new Date().getTime();
        const notUsedFiles = await this.filesRepository.findAll({
            where: { essenceTable: null },
        });

        for (let i = 0; i < notUsedFiles.length; i++) {
            const fileDateTime = new Date(notUsedFiles[i].createdAt).getTime();
            const diff = new Date(curDateTime - fileDateTime).getHours();
            if (diff > 2) {
                const fileName = notUsedFiles[i].fileName;
                await this.deleteFileFromStatic(fileName);
                await notUsedFiles[i].destroy();
                count++;
            }
        }

        return { 'Количество удаленных файлов': count };
    }

    /**
     * Удаляет файл по имени
     * @param {string} fileName Имя файла
     */
    async deleteFileFromStatic(fileName: string): Promise<boolean> {
        try {
            const filePath = path.resolve(__dirname, '..', 'static');
            fs.unlinkSync(path.join(filePath, fileName));
            return true;
        } catch (e) {
            throw new HttpException(
                'Произошла ошибка при удалении файла',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    async stopUsing(fileName: string): Promise<boolean> {
        const file = await this.filesRepository.findOne({
            where: { fileName },
        });

        if (file) {
            file.set('essenceTable', null);
            file.set('essenceId', null);
            file.save();

            return true;
        }

        throw new HttpException(
            'Файл не найден',
            HttpStatus.INTERNAL_SERVER_ERROR,
        );
    }
}
