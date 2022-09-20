import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookService } from './books/book/book.service';
import { BooksController } from './books/books.controller';

@Module({
  imports: [],
  controllers: [AppController, BooksController],
  providers: [AppService, BookService],
})
export class AppModule { }
