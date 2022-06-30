import { Catch, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    // super.catch(exception, host);
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    let error;
    switch (exception.name && exception.code) {
      case 'NotFoundException': {
        error = {
          statusCode: HttpStatus.NOT_FOUND,
          message: 'Item Not Found',
        };
        break;
      }
      case 11000:
        // duplicate exception
        error = {
          statusCode: HttpStatus.CONFLICT,
          message: 'Duplicate key detected',
          fields: exception.keyValue,
        };
        break;
      case 'MongoServerError':
        // any mongo server error
        error = {
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: 'Mongo Server Error',
        };
        break;

      default: {
        error = {
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: 'Internal Server Error',
        };
        break;
      }
    }
    let exRes = exception.response;
    if (exRes) {
      error.statusCode = exRes.statusCode;
      error.message =
        typeof exRes.message !== 'string' ? exRes.message[0] : exRes.message;
    }
    response.status(error.statusCode).json(error);
  }
}
