import { Controller, Body, Delete, Get, HttpStatus, Param, Post, Put, Res, Render, Redirect, Req, UsePipes } from '@nestjs/common';
import { CreateBookDto } from 'src/dto/book/create-book.dto';
import { BookService } from 'src/services/book/book.service';
import { Response } from 'express';
import { BookSchema } from 'src/dto/book/book.dto';

import {JoiValidationPipe} from 'src/validation/book/validation.pipe'
import Joi from 'joi';

@Controller('book')
export class BookController {
    constructor(private readonly bookService: BookService) { }


    @Post()
    @UsePipes(new JoiValidationPipe(BookSchema))
    async createBook(@Res() res: Response, @Body() createBookDto: CreateBookDto) {
        try {
            const newBook = await this.bookService.createBook(createBookDto);
            return res.status(HttpStatus.CREATED).send('A BOOK IS CREATED');
        } catch (error) {

        }
    }

    @Get()
    async getAllBooks(@Res() res: Response) {
        try {
            const books = await this.bookService.getAllBooks();
            return res.status(HttpStatus.OK).json({
                message: 'All students data found successfully', books,
            });

        } catch (error) {
            return res.status(error.status).json(error.res);
        }
    }
    @Get(':id')
    async getOneBook(@Param('id') bookid: string, @Res() res: Response) {
        try {
            const book = await this.bookService.getoneBook(bookid);
            return res.status(HttpStatus.OK).json({
                message: `${book.name} find successfully`, book,
            }); 
        } catch (error) {
            return res.status(error.status).json(error.res);
        }
    }




    
}
