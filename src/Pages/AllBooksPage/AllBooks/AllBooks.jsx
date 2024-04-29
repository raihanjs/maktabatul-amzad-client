import React, { useContext } from "react";
import BooksFilter from "../BooksFilter/BooksFilter";
import { ThemeContext } from "../../../Providers/ThemeProvider";
import { Link } from "react-router-dom";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import useBooks from "../../../hooks/useBooks";
import BookCard from "../../Shared/BookCard/BookCard";

export default function AllBooks() {
  const { language } = useContext(ThemeContext);
  const [books, isLoading] = useBooks();
  return (
    <section className="container">
      {/* Section title and breadcrumb */}
      <div className="border-b border-primary mt-5">
        <div className="flex justify-between items-center">
          {/* Title */}
          <p className="text-xl font-semibold text-primary">
            {language === 0
              ? "সকল বই"
              : language === 2
              ? "جميع الكتب"
              : "All Books"}
          </p>
          {/* Breadcrumb */}
          <div className="flex items-center">
            <Link to="/" className="text-primary">
              {language === 0 ? "হোম" : language === 2 ? "بيت" : "Home"}
            </Link>
            <LiaLongArrowAltRightSolid className="mx-2" />
            <span>
              {language === 0
                ? "সকল বই"
                : language === 2
                ? "جميع الكتب"
                : "All Books"}
            </span>
          </div>
        </div>
      </div>

      {/* Filter area */}
      <BooksFilter />
      {/* Books Container */}
      <div className="grid grid-cols-7 gap-5">
        {isLoading ? (
          <>.............</>
        ) : (
          <>
            {books.map((book) => (
              <BookCard key={book._id} book={book} />
            ))}
          </>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center my-10">
        <button className="py-1 px-3 mx-2 border transition-all hover:border-primary hover:bg-primary hover:text-white">
          Prev
        </button>
        <button className="py-1 px-3 mx-2 border transition-all hover:border-primary hover:bg-primary hover:text-white">
          1
        </button>
        <button className="py-1 px-3 mx-2 border transition-all hover:border-primary hover:bg-primary hover:text-white">
          2
        </button>
        <button className="py-1 px-3 mx-2 border transition-all hover:border-primary hover:bg-primary hover:text-white">
          3
        </button>
        <button className="py-1 px-3 mx-2 border transition-all hover:border-primary hover:bg-primary hover:text-white">
          Next
        </button>
      </div>
    </section>
  );
}
