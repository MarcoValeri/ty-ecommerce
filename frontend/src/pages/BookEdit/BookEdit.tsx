import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./BookEdit.scss";

const BookEdit = () => {
    const { id } = useParams<{ id: string }>();
    const [title, setTitle] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        // Fetch the book details to populate the form
        const fetchBook = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/books/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch book details');
                }
                const book = await response.json();
                setTitle(book.title);
                setAuthor(book.author);
                // TEST
                console.log(book);
            } catch (error) {
                if (error instanceof Error) {
                    setMessage(error.message);
                } else {
                    setMessage('An unknown error occurred');
                }
            }
        };

        fetchBook();
    }, [id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const book = { id, title, author };

        try {
            const response = await fetch(`http://localhost:3000/api/books/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(book),
            });

            if (!response.ok) {
                throw new Error('Failed to update book');
            }

            setMessage('Book updated successfully');
        } catch (error) {
            if (error instanceof Error) {
                setMessage(error.message);
            } else {
                setMessage('An unknown error occurred');
            }
        }
    }

    return (
        <div className="book-edit">
            <h2>Book Edit</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label>Author:</label>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <button type="submit">Update Book</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    )
}

export default BookEdit;