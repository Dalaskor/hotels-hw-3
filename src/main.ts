import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
// import { ValidationPipe } from './pipes/validation.pipe';

/**
 * Запуск сервера
 */
const start = async () => {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);

    // Конфигурация документации API
    const config = new DocumentBuilder()
        .setTitle('Hotels Homework-3')
        .setDescription('Документация REST API')
        .setVersion('1.0.0')
        .addTag('Hotels')
        .build();

    // Документация API
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document);

    // Крашиться при запросе списка ролей
    // Подключение валидации
    // app.useGlobalPipes(new ValidationPipe());

    // Старт сервера
    app.listen(PORT, () => {
        console.log(`The server has been started on port ${PORT}`);
    });
};

start();
