import React, { useState } from "react";
import { Link } from "react-router-dom";
import BookCard from "../../../../Shared/BookCard/BookCard";

const NewProducts = () => {
  const [allBooks, setAllBooks] = useState([]);

  fetch("books.json")
    .then((res) => res.json())
    .then((data) => setAllBooks(data));
  console.log(allBooks);
  return (
    <section>
      <div className="flex justify-between mb-5 border-b">
        <h3 className="text-xl text-black font-semibold">New Products</h3>
        <button className="text-red underline">
          <Link to="/">See More</Link>
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5">
        {allBooks.map((book) => (
          <BookCard key={book.id} book={book}></BookCard>
        ))}
      </div>
    </section>
  );
};

export default NewProducts;
