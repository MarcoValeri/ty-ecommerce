import { useState } from "react";
import "./BookAdd.scss";

const BookAdd = () => {
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const book = { id, title, author};

        try {
            const response = await fetch('http://localhost:3000/api/books', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(book),
            });

            if (!response.ok) {
                throw new Error('Failed add book');
            }

            setMessage('Book added successfully');
        } catch (error) {
            setMessage('An unknown error occurred');
        }
    }

    return (
        <div className="book-add">
            <h2>Add Book</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Book ID:</label>
                    <input
                        type="text"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                </div>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label>Author</label>
                    <input
                        type="text"
                        value={author}
                        onChange={e => setAuthor(e.target.value)}
                    />
                </div>
                <button type="submit">Add Book</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    )
}

export default BookAdd;