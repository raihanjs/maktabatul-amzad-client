import { useContext, useRef } from "react";
import Slider from "react-slick";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import useBooks from "../../../hooks/useBooks";
import BookCard from "../../Shared/BookCard/BookCard";
import { ThemeContext } from "../../../Providers/ThemeProvider";

export default function HomeRcentlySold() {
  const { language } = useContext(ThemeContext);
  const [books, isLoading] = useBooks();
  const homeRecentSlBtns = useRef(null);

  const maktabatulAmzadBooks = books.filter(
    (book) =>
      book?.publisherDetails[0]?.name[1].toLowerCase() === "maktabatul amjad"
  );

  var settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: false,
    arrows: false,
    speed: 100,
    slidesToShow: 7,
    slidesToScroll: 1,
    easing: "linear",
    responsive: [
      {
        breakpoint: 1289,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };
  return (
    <section className="mb-12 mx-2 md:mx-0">
      {isLoading ? (
        <>
          <div className="h-96 bg-gray-100">
            <div className="flex justify-center items-center">
              <p>Loading Our Published Books ...</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="container p-5 bg-gray-100 relative shadow-2xl rounded-sm">
            <h3 className="text-xl font-medium mb-3">
              {language == 0
                ? "সম্প্রতি বিক্রি হয়েছে"
                : language == 1
                ? "Recently Sold"
                : "تم بيعها مؤخرًا"}
            </h3>
            <div className=" overflow-hidden pb-3">
              <Slider ref={homeRecentSlBtns} {...settings}>
                {maktabatulAmzadBooks.map((book) => (
                  <BookCard key={book._id} book={book}></BookCard>
                ))}
                {maktabatulAmzadBooks.map((book) => (
                  <BookCard key={book._id} book={book}></BookCard>
                ))}
                {maktabatulAmzadBooks.map((book) => (
                  <BookCard key={book._id} book={book}></BookCard>
                ))}
                {maktabatulAmzadBooks.map((book) => (
                  <BookCard key={book._id} book={book}></BookCard>
                ))}
                {maktabatulAmzadBooks.map((book) => (
                  <BookCard key={book._id} book={book}></BookCard>
                ))}
              </Slider>

              {/* Slider buttons */}
              {/* <div className="absolute top-1/3 w-full flex justify-between"> */}
              <button
                onClick={() => homeRecentSlBtns.current.slickPrev()}
                className="absolute top-2/4 -left-0.5 h-20 w-8 bg-white shadow-2xl flex justify-center items-center"
              >
                <IoIosArrowBack className="text-black text-2xl" />
              </button>
              <button
                onClick={() => homeRecentSlBtns.current.slickNext()}
                className="absolute top-2/4 -right-0.5 h-20 w-8 bg-white shadow-2xl flex justify-center items-center"
              >
                <IoIosArrowForward className="text-black text-2xl" />
              </button>
              {/* </div> */}
            </div>
          </div>
        </>
      )}
    </section>
  );
}
