import { Injectable } from '@nestjs/common';
import { Book } from 'src/models/book.model';

@Injectable()
export class BookService {
    bookStore: Book[] = [{ id: 1, bookName: "Harry Potter" }];
    createBook(book: Book) {
        this.bookStore.push(book);
        return this.bookStore
    }
    fetchBookList(): Book[] {
        return this.bookStore
    }
}
