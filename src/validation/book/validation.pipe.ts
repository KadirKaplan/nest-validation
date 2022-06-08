import {
  PipeTransform,
  BadRequestException,
    ArgumentMetadata
} from '@nestjs/common';
import { CreateBookDto } from 'src/dto/book/create-book.dto';
import { BookSchema } from 'src/dto/book/book.dto';
import { ObjectSchema } from 'joi';

export class JoiValidationPipe  implements PipeTransform<CreateBookDto> {
  constructor(private schema: ObjectSchema) {}
   transform(value: CreateBookDto): CreateBookDto {
    const result = BookSchema.validate(value);
    if (result.error) {
      const errorMessages = result.error.details.map((d) => d.message).join();
      throw new BadRequestException(errorMessages);
    }
    return value;
  }
}
