import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import PageTitle from "../../Components/PageTitle/PageTitle";
import useBooks from "../../hooks/useBooks";
import { ThemeContext } from "../../Providers/ThemeProvider";
import BookCard from "../Shared/BookCard/BookCard";
import { ImBooks } from "react-icons/im";

export default function PublisherPage() {
  const { language } = useContext(ThemeContext);
  const publisherDetails = useLoaderData();
  const [books, isLoading] = useBooks();
  const { name, image, publisherId } = publisherDetails;
  const publisherBooks = books.filter((book) => book.publisher === publisherId);
  return (
    <section className="container">
      <Helmet>
        <title>Maktabatul Amzad - {name[1]}</title>
      </Helmet>
      <PageTitle title={[name[0], name[1], name[2]]} />

      {/* Publisher's books */}
      <div className="my-10">
        <div className="flex flex-col items-center">
          {image ? (
            <img src={image} className="h-40" alt="" />
          ) : (
            <>
              <ImBooks className="text-6xl" />
            </>
          )}
          <p className="text-md font-bold text-primary">
            {language === 0
              ? `${name[0]} এর বইসমুহ`
              : language === 2
              ? `كتب ${name[2]}`
              : `Books of ${name[1]}`}
          </p>
        </div>
        <div className="flex flex-wrap  justify-center">
          {publisherBooks.map((publsiherBook) => (
            <BookCard book={publsiherBook} key={publsiherBook._id}></BookCard>
          ))}
        </div>
      </div>
    </section>
  );
}
