import { useContext, useRef } from "react";
import Slider from "react-slick";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import useBooks from "../../../hooks/useBooks";
import BookCard from "../../Shared/BookCard/BookCard";
import { ThemeContext } from "../../../Providers/ThemeProvider";

export default function HomeOurBooks() {
  const { language } = useContext(ThemeContext);
  const [books, isLoading] = useBooks();
  const sliderBtns = useRef(null);

  const maktabatulAmzadBooks = books.filter(
    (book) =>
      book?.publisherDetails[0]?.name[1].toLowerCase() === "maktabatul amjad"
  );

  var settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: false,
    speed: 100,
    slidesToShow: 5,
    slidesToScroll: 1,
    easing: "linear",
  };

  return (
    <section className="mb-12">
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
          <div className="container mx-auto px-0.5  sm:px-3 md:px-0 bg-gray-100">
            <div className="p-5">
              <h3 className="text-xl font-medium">
                {language == 0
                  ? "আমাদের বই"
                  : language == 1
                  ? "Our Books"
                  : "شكرا لك"}
              </h3>
              <div className="relative overflow-hidden pb-3">
                <Slider ref={sliderBtns} {...settings}>
                  {maktabatulAmzadBooks.map((book) => (
                    <BookCard key={book._id} book={book}></BookCard>
                  ))}
                </Slider>

                {/* Slider buttons */}
                <div className="absolute top-1/3 w-full flex justify-between">
                  <button
                    onClick={() => sliderBtns.current.slickPrev()}
                    className="h-20 w-8 bg-white shadow-2xl flex justify-center items-center"
                  >
                    <IoIosArrowBack className="text-black" />
                  </button>
                  <button
                    onClick={() => sliderBtns.current.slickNext()}
                    className="h-20 w-8 bg-white shadow-2xl flex justify-center items-center"
                  >
                    <IoIosArrowForward className="text-black" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
