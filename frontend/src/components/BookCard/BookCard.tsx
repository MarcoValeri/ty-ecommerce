import "./BookCard.scss";

type Props = {
    title: string;
    author: string;
}

const BookCard = (props: Props) => {
    return (
        <div className="book-card">
            <h2>{props.title}</h2>
            <p>{props.author}</p>
        </div>
    )
}

export default BookCard;