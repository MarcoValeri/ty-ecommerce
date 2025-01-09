// GET: Retrieve all books by sending a GET request to http://localhost:3000/api/books.
// GET (by ID): Retrieve a specific book by sending a GET request to http://localhost:3000/api/books/:id.
// POST: Create a new book by sending a POST request with JSON data (title and author) to http://localhost:3000/api/books.
// PUT: Update a book by sending a PUT request to http://localhost:3000/api/books/:id.
// DELETE: Delete a book by sending a DELETE request to http://localhost:3000/api/books/:id.

import { Router, Request, Response } from 'express';

const router = Router();

interface Book {
    id: number;
    title: string;
    author: string;
}

const books: Book[] = [
    { id: 1, title: "1984", author: "George Orwell" },
    { id: 2, title: "Brave New World", author: "Aldous Huxley" },
    { id: 3, title: "Fahrenheit 451", author: "Ray Bradbury" }
];

// GET all books
router.get("/books", (req: Request, res: Response) => {
    res.json(books);
})

// GET a single book
router.get("/books/:id", (req: Request, res: Response) => {
    const bookId = parseInt(req.params.id);
    const book = books.find(b => b.id === bookId);

    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ message: "Book not found" });
    }
})

// CREATE a new book
router.post("/books", (req: Request, res: Response) => {
    const newBook: Book = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    };
    books.push(newBook);
    res.status(201).json(newBook);
})

// UPDATE a book
router.put("/books/:id", (req: Request, res: Response) => {
    const bookId = parseInt(req.params.id);
    const bookIndex = books.findIndex(b => b.id === bookId);

    if (bookIndex !== -1) {
        books[bookIndex] = { id: bookId, title: req.body.title, author: req.body.author};
        res.json(books[bookIndex]);
    } else {
        res.status(404).json({ message: "Book not found" });
    }
})

// DELETE a book
router.delete("/books/:id", (req: Request, res: Response) => {
    const bookId = parseInt(req.params.id);
    const bookIndex = books.findIndex(b => b.id === bookId);

    if (bookIndex !== -1) {
        books.splice(bookIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: "Book not found" });
    }
})

export default router;