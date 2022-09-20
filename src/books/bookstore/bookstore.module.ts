import { Module } from '@nestjs/common';
import { BookService } from '../bookstore_service/book.service';
import { BooksController } from '../books.controller';

@Module({
    controllers: [BooksController],
    providers: [BookService],
})
export class BookstoreModule { }
