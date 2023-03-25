import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
    * Запуск сервера
*/
const start = async () => {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);

    app.listen(PORT, () => {
        console.log(`The server has been started on port ${PORT}`);
    });
}

start();
