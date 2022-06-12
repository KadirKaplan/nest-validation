import { Module, NestModule,MiddlewareConsumer,RequestMethod  } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controller/user/user.controller';
import { UserService } from './services/user/user.service';

import { BookController } from './controller/book/book.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BookService } from './services/book/book.service';
import { BookSchema } from './schema/book/book.schema';
import { UserSchema } from './schema/user/user.schema';
import { NestApplication } from '@nestjs/core';
import { UserMiddleware } from './user.middleware';

@Module({
  imports: [ MongooseModule.forRoot('mongodb://localhost/bookapp'),
    MongooseModule.forFeature([{ name: 'Book', schema: BookSchema }]),
    MongooseModule.forFeature([{name : 'User', schema : UserSchema}])],
  controllers: [AppController, UserController, BookController],
  providers: [AppService, UserService, BookService],
})
export class AppModule implements NestModule { 
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(UserMiddleware)
      .forRoutes({ path: 'user', method: RequestMethod.POST });
  }
}
