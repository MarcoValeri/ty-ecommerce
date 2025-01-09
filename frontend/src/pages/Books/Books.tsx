import { useEffect, useState } from "react";
import BookCard from "../../components/BookCard/BookCard";

import "./Books.scss";
import Nav from "../../components/Nav/Nav";

interface Book {
    id: number;
    title: string;
    author: string;
}

const Books = () => {

    const [books, setBooks] = useState<Book[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('http://localhost:3000/api/books')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Could not fetch books');
                }
                return response.json();
            })
            .then(data => {
                setBooks(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            })
    }, []);

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            <Nav />
            <div className="books">
                <h2>Books</h2>
                <div className="books__container-books">
                    {books && books.map((book: Book) => {
                        return (
                            <BookCard
                                key={book.id}
                                id={book.id}
                                title={book.title}
                                author={book.author}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Books;