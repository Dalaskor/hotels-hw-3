import { HttpException, HttpStatus } from '@nestjs/common';

/**
    * Exception для валидации
 */
export class ValidationException extends HttpException {
    messages;

    constructor(response) {
        super(response, HttpStatus.BAD_REQUEST);
        this.message = response;
    }
}
