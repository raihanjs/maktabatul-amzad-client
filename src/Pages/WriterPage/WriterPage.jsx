import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

import useBooks from "../../hooks/useBooks";
import BookCard from "../Shared/BookCard/BookCard";
import { ThemeContext } from "../../Providers/ThemeProvider";
import PageTitle from "../../Components/PageTitle/PageTitle";

export default function WriterPage() {
  const [books] = useBooks();
  const writer = useLoaderData();
  const { language } = useContext(ThemeContext);
  const { name, writerId, desc, image } = writer;
  const writerBooks = books.filter((book) => book.writer.includes(writerId));

  return (
    <section className="container">
      <PageTitle title={[name[0], name[1], name[2]]} />
      <div className="container mx-auto px-0.5 sm:px-3 md:px-0 mb-8">
        {/* Writer life */}
        <div className="my-5 grid grid-cols-12 gap-5">
          <img src={image} className="col-span-2" alt="" />
          <div className="col-span-10">
            <p className="font-semibold text-gray mb-3">
              <small>
                {language === 0
                  ? "লেখকের জীবনী"
                  : language === 2
                  ? "السيرة الذاتية للمؤلف"
                  : "Biography of the author"}
              </small>
            </p>
            <p className="col-span-10">{desc[language]}</p>
          </div>
        </div>
        {/* Writer's books */}
        <div className="my-10">
          <p className="text-md font-bold text-primary">
            {language === 0
              ? `${name[0]} এর বইসমুহ`
              : language === 2
              ? `كتب ${name[2]}`
              : `Books of ${name[1]}`}
          </p>
          <div className="flex flex-wrap  justify-center">
            {writerBooks.map((writerBook) => (
              <BookCard book={writerBook} key={writerBook._id}></BookCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
