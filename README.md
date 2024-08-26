# book-crud-api

# Book CRUD API

This is a simple CRUD (Create, Read, Update, Delete) API built using Node.js, Express, and MongoDB. It allows you to manage a collection of books.

## Features

- **Create** a new book
- **Read** a list of all books
- **Read** details of a single book
- **Update** a book
- **Delete** a book

## Technologies Used

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your local machine
- [MongoDB](https://www.mongodb.com/) installed or access to MongoDB Atlas
- Basic knowledge of JavaScript and Node.js

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/SamTheSWE/book-crud-api.git
    cd book-crud-api
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
    - Create a `.env` file in the root of your project.
    - Add the following environment variables:
    ```env
    PORT=5000
    MONGODB_URI=mongodb://localhost:27017/bookdb
    ```

4. **Start the development server**:
    ```bash
    npm run dev
    ```

### API Endpoints

| Method | Endpoint            | Description                      |
|--------|---------------------|----------------------------------|
| POST   | `/api/books`         | Create a new book                |
| GET    | `/api/books`         | Get all books                    |
| GET    | `/api/books/:id`     | Get a book by ID                 |
| PUT    | `/api/books/:id`     | Update a book by ID              |
| DELETE | `/api/books/:id`     | Delete a book by ID              |

### Example Requests

- **Create a Book**:
    ```bash
    curl -X POST -H "Content-Type: application/json" -d '{"title": "1984", "author": "George Orwell"}' http://localhost:5000/api/books
    ```

- **Get All Books**:
    ```bash
    curl http://localhost:5000/api/books
    ```

- **Get a Single Book**:
    ```bash
    curl http://localhost:5000/api/books/{book_id}
    ```

- **Update a Book**:
    ```bash
    curl -X PUT -H "Content-Type: application/json" -d '{"title": "Animal Farm"}' http://localhost:5000/api/books/{book_id}
    ```

- **Delete a Book**:
    ```bash
    curl -X DELETE http://localhost:5000/api/books/{book_id}
    ```

### Project Structure

```bash
book-crud-api/
│
├── controllers/
│   └── bookController.js   # Contains CRUD operations logic
│
├── models/
│   └── Book.js             # Defines the Book model schema
│
├── routes/
│   └── bookRoutes.js       # Routes for book-related API endpoints
│
├── config/
│   └── db.js               # MongoDB connection setup
│
├── .env                    # Environment variables
├── index.js                # Main entry point for the application
├── package.json            # Project metadata and dependencies
└── README.md               # Project documentation
