import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookstoreModule } from './books/bookstore/bookstore.module';

@Module({
  imports: [BookstoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
