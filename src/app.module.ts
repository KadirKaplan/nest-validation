import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controller/user/user.controller';
import { UserService } from './services/user/user.service';
import { UserModule } from './controller/user/user.module';
import { BookController } from './controller/book/book.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BookService } from './services/book/book.service';
import { BookSchema } from './schema/book/book.schema';

@Module({
  imports: [UserModule, MongooseModule.forRoot('mongodb://localhost/bookapp'),
    MongooseModule.forFeature([{ name: 'Book', schema: BookSchema }])],
  controllers: [AppController, UserController, BookController],
  providers: [AppService, UserService, BookService],
})
export class AppModule { }
