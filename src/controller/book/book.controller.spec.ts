import { Test } from '@nestjs/testing';
import { BookController } from './book.controller';
import { BookService } from 'src/services/book/book.service';
import { ModuleRef } from '@nestjs/core';

describe('BookController', () => {
  let bookController: BookController;
  let bookService: BookService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [BookController],
      providers: [BookService],
    }).compile();
    bookService = module.get<BookService>(BookService);
    bookController = module.get<BookController>(BookController);
  });

  describe('getAllBooks', () => {
    it('should return an array of cats', async () => {
      const result = ['test'];
    });
  });
});
