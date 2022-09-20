import { Body, Controller, Get, Post } from '@nestjs/common';
import { Book } from 'src/models/book.model';
import { BookService } from './bookstore_service/book.service';

@Controller('books')
export class BooksController {
    constructor(private book: BookService) { }

    @Get('/api/getBooks')
    findAll(): Book[] {
        return this.book.fetchBookList();
    }

    @Post('/api/addNewBook')
    AddNewBook(
        @Body() book: Book
    ): Book[] {
        return this.book.createBook(book)
    }
}
