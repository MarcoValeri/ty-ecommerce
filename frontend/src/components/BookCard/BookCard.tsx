import { Link } from "react-router";
import "./BookCard.scss";

type Props = {
    id: number;
    title: string;
    author: string;
}

const BookCard = (props: Props) => {
    return (
        <div className="book-card">
            <h2>{props.title}</h2>
            <p>{props.author}</p>
            <Link to={`/book-edit/${props.id}`}>Edit</Link>
            <Link to={`/book-delete/${props.id}`}>Delete</Link>
        </div>
    )
}

export default BookCard;