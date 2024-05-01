import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../../Providers/ThemeProvider";
import useBooks from "../../../../hooks/useBooks";

export default function SingleCategory({ category }) {
  const { language } = useContext(ThemeContext);
  const [books] = useBooks();
  const thisCatBooks = books.filter(
    (book) => book.category === category.categoryId
  );
  return (
    <Link
      to={`/categories/${category.categoryId}`}
      key={category._id}
      className="bg-primary py-2 px-6 m-2 rounded-sm text-white capitalize border border-primary hover:bg-transparent hover:text-primary"
    >
      {category.name[language]} - {thisCatBooks.length}
    </Link>
  );
}
