# REST API example application using Nest Js

This is a bare-bones example of a Rest API with nest js application

`npm run start:run` runs this app locally



## Run the app

   npm run start:dev

# REST API

The REST API to the example app is described below.

## Get list of Books

### Request

`GET /books/api/getBooks`

   http://localhost:3000/books/api/getBooks

### Response

    [
    {
        "id": 1,
        "bookName": "Harry Potter"
    },
    {
        "id": 2,
        "bookName": 1984
    }
    ]

## Add a new book

### Request

`GET /books/api/addNewBook`

   http://localhost:3000/books/api/addNewBook

### Body

 
{
   "id": 2,
    "bookName": 1984
}


### Response

    [
    {
        "id": 1,
        "bookName": "Harry Potter"
    },
    {
        "id": 2,
        "bookName": 1984
    }
    ]
