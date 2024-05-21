import Slider from "react-slick";
import { useContext, useRef } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { ThemeContext } from "../../../Providers/ThemeProvider";
import useWriters from "../../../hooks/useWriters";
import { Link } from "react-router-dom";

export default function HomeWriters() {
  const { language } = useContext(ThemeContext);
  const [writers, isLoading] = useWriters();
  const homeWriterSlBtns = useRef(null);

  var settings = {
    dots: false,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 100,
    slidesToShow: 6,
    slidesToScroll: 1,
    easing: "linear",
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1025,
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
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="container mb-12 bg-gray-100 p-5">
      <h3 className="text-xl font-medium mb-2">
        {language == 0 ? "লেখক " : language == 1 ? "Writers" : "الكاتب"}
      </h3>
      <div className="relative">
        <Slider ref={homeWriterSlBtns} {...settings}>
          {writers.map((writer) => (
            <div key={writer._id}>
              <Link
                to={`writers/${writer?.writerId}`}
                className="flex flex-col items-center justify-center"
              >
                <div className="mx-auto h-28 w-28 rounded-full overflow-hidden flex justify-center items-center border border-2 pointer">
                  <img src={writer?.image} className="h-full" alt="" />
                </div>
                <p className="text-sm font-medium mt-2 w-48 text-center">
                  {writer?.name[language]}
                </p>
              </Link>
            </div>
          ))}
        </Slider>

        {/* Slider buttons */}
        <div className="absolute top-1/4 left-0 w-full px-1 lg:px-2 flex justify-between">
          <button
            onClick={() => homeWriterSlBtns.current.slickPrev()}
            className="h-20 w-8 bg-white shadow-2xl flex justify-center items-center"
          >
            <MdArrowBackIos className="text-black" />
          </button>
          <button
            onClick={() => homeWriterSlBtns.current.slickNext()}
            className="h-20 w-8 bg-white shadow-2xl flex justify-center items-center"
          >
            <MdArrowForwardIos className="text-black" />
          </button>
        </div>
      </div>
    </section>
  );
}
