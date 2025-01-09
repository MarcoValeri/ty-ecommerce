import { useEffect, useState } from "react";

import "./Books.scss";

const Books = () => {

    const [books, setBooks] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
        <div className="books">
            <h2>Books</h2>
            <pre>{JSON.stringify(books, null, 2)}</pre>
        </div>
    )
}

export default Books;