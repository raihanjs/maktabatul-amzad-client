import BookCard from "../../../Shared/BookCard/BookCard";
import useBooks from "../../../../hooks/useBooks";

const RelatedBooks = ({ bookCategory, bookId }) => {
  const [books] = useBooks();
  const relatedBooks = books.filter((book) => book.category === bookCategory);
  const removeMainBook = relatedBooks.filter((book) => book._id !== bookId);
  return (
    <div>
      {removeMainBook.slice(0, 6).map((book) => (
        <BookCard book={book} key={book._id}></BookCard>
      ))}
    </div>
  );
};

export default RelatedBooks;
