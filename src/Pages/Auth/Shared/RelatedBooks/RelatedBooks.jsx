import { useEffect, useState } from "react";
import BookCard from "../../../Shared/BookCard/BookCard";

const RelatedBooks = ({ bookCategory }) => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("https://maktabatul-amzad-s-tan.vercel.app/api/books/getcategory", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ category: bookCategory }),
    })
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const showBooks = books.slice(0, 6);
  return (
    <div>
      {showBooks.map((book) => (
        <BookCard book={book} key={book._id}></BookCard>
      ))}
    </div>
  );
};

export default RelatedBooks;
