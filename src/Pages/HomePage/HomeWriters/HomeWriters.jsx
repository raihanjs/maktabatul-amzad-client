import Slider from "react-slick";
import { useContext, useRef } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { ThemeContext } from "../../../Providers/ThemeProvider";
import useWriters from "../../../hooks/useWriters";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

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
    <section className="mb-12 mx-2 md:mx-0">
      <div className="container p-2 md:p-5 shadow-xl rounded-sm bg-gray-100">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-medium mb-2">
            {language == 0 ? "লেখক " : language == 1 ? "Writers" : "الكاتب"}
          </h3>

          <Link
            to="/writers"
            className="text-lg hover:text-primary hover:border-b border-primary"
          >
            See All
          </Link>
        </div>
        <div className="relative">
          <Slider ref={homeWriterSlBtns} {...settings}>
            {writers.map((writer) => (
              <div key={writer._id}>
                <Link
                  to={`writers/${writer?.writerId}`}
                  className="flex flex-col items-center justify-center"
                >
                  <div className="mx-auto h-28 w-28 rounded-full overflow-hidden flex justify-center items-center border border-2 pointer">
                    {writer?.image ? (
                      <img src={writer?.image} className="h-full" alt="" />
                    ) : (
                      <FaUserAlt className="text-6xl text-primary" />
                    )}
                  </div>
                  <p className="text-sm font-medium mt-2 w-48 text-center">
                    {writer?.name[language]}
                  </p>
                </Link>
              </div>
            ))}
          </Slider>

          {/* Slider buttons */}
          {/* <div className=" w-full px-1 lg:px-2"> */}
          <button
            onClick={() => homeWriterSlBtns.current.slickPrev()}
            className="absolute top-1/4 left-0 md:-left-6 h-20 w-8 bg-white shadow-2xl flex justify-center items-center"
          >
            <MdArrowBackIos className="text-black text-xl" />
          </button>
          <button
            onClick={() => homeWriterSlBtns.current.slickNext()}
            className="absolute top-1/4 right-0 md:-right-6 h-20 w-8 bg-white shadow-2xl flex justify-center items-center"
          >
            <MdArrowForwardIos className="text-black text-xl" />
          </button>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}
