import Slider from "react-slick";
import { useContext, useRef } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { ThemeContext } from "../../../Providers/ThemeProvider";
import { Link } from "react-router-dom";
import { ImBooks } from "react-icons/im";

import usePublishers from "../../../hooks/usePublishers";

export default function HomePublishers() {
  const { language } = useContext(ThemeContext);
  const [publishers, isLoading] = usePublishers();
  const homePublisherSlBtns = useRef(null);
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
    <section className="mb-12 mx-2 md:mx-0 bg-gray-100 shadow-xl rounded-sm">
      <div className="container p-2 md:p-5">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-medium mb-2">
            {language == 0
              ? "পাবলিশার্স "
              : language == 1
              ? "Publishers"
              : "لاب توب"}
          </h3>

          <Link
            to="/publishers"
            className="text-lg hover:text-primary hover:border-b border-primary"
          >
            See All
          </Link>
        </div>
        <div className="relative">
          <Slider ref={homePublisherSlBtns} {...settings}>
            {publishers.map((publisher) => (
              <div key={publisher._id}>
                <Link
                  to={`publishers/${publisher?.publisherId}`}
                  className="flex flex-col items-center justify-center"
                >
                  <div className="mx-auto h-28 w-28 rounded-full overflow-hidden flex justify-center items-center border border-2 pointer">
                    {publisher?.image ? (
                      <img src={publisher?.image} className="h-full" alt="" />
                    ) : (
                      <ImBooks className="text-6xl text-primary" />
                    )}
                  </div>
                  <p className="text-sm font-medium mt-2 w-48 text-center">
                    {publisher?.name[language]}
                  </p>
                </Link>
              </div>
            ))}
          </Slider>

          {/* Slider buttons */}
          {/* <div className=" w-full px-1 lg:px-2"> */}
          <button
            onClick={() => homePublisherSlBtns.current.slickPrev()}
            className="absolute top-1/4 left-0 md:-left-6 h-20 w-8 bg-white shadow-2xl flex justify-center items-center"
          >
            <MdArrowBackIos className="text-black text-xl" />
          </button>
          <button
            onClick={() => homePublisherSlBtns.current.slickNext()}
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
