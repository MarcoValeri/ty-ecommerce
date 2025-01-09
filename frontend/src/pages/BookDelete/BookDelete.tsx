import { useState } from 'react';
import { useParams } from 'react-router-dom';
import "./BookDelete.scss";

const BookDelete = () => {
    const { id } = useParams<{ id: string }>();
    const [message, setMessage] = useState<string>('');

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/books/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to delete book');
            }

            setMessage('Book deleted successfully');
        } catch (error) {
            if (error instanceof Error) {
                setMessage(error.message);
            } else {
                setMessage('An unknown error occurred');
            }
        }
    };

    return (
        <div className="book-delete">
            <h2>Delete Book</h2>
            <button onClick={handleDelete}>Delete Book</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default BookDelete;