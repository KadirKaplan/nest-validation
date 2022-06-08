import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBookDto } from 'src/dto/book/create-book.dto';
import { IBook } from 'src/interfaces/book/book.interface';

@Injectable()
export class BookService {
constructor(@InjectModel('Book') private bookModel : Model<IBook>){}
    
    //create a book
    async createBook (createBookDto : CreateBookDto) : Promise<IBook> {
        const newBook = await new this.bookModel(createBookDto);
        return newBook.save();
    }

    //get all books
    async getAllBooks () : Promise<IBook[]> {
        const books = await  this.bookModel.find();
        return books;
    }

    //get one book
    async getoneBook (bookid : string): Promise<IBook> {
        const book = await this.bookModel.findById(bookid);
        return book;
    }
}
