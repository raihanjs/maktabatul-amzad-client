import React from "react";
import { useRef } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function BannerSlider() {
  const sliderBtns = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="md:col-span-8 lg:col-span-4 xl:col-span-3 border relative py-5 px-10 lg:px-20 flex flex-col justify-center">
      <Slider ref={sliderBtns} {...settings}>
        {/* Slider item */}
        <div className="">
          <div className="flex items-center justify-center">
            <div className="w-8/12">
              <h3 className="hero-title text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold line-clamp-2">
                Interpretation Of The Great Qur'an Tafsir Ibn Kathir I Ibn Hazm{" "}
              </h3>
              <p className="text-base lg:text-lg mt-2 mb-4 line-clamp-2">
                The Author Book Interpretation of the great qur'an tafsir ibn
                kathir i ibn hazm and the author of 3 another books
              </p>
            </div>
            <div className="w-4/12">
              <div>
                <img
                  src="https://www.noor-book.com/publice/covers_cache_webp/1/d/d/5/02f62b4165dd537df60326da06d3724d.jpg.webp"
                  className="w-full lg:w-9/12 xl:w-7/12 ml-auto"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        {/* Slider item */}
        <div className="">
          <div className="flex items-center justify-center">
            <div className="w-8/12">
              <h3 className="hero-title text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold line-clamp-2">
                Interpretation Of The Great Qur'an Tafsir Ibn Kathir I Ibn Hazm{" "}
              </h3>
              <p className="text-base lg:text-lg mt-2 mb-4 line-clamp-2">
                The Author Book Interpretation of the great qur'an tafsir ibn
                kathir i ibn hazm and the author of 3 another books
              </p>
            </div>
            <div className="w-4/12">
              <div>
                <img
                  src="https://www.noor-book.com/publice/covers_cache_webp/1/d/d/5/02f62b4165dd537df60326da06d3724d.jpg.webp"
                  className="w-full lg:w-9/12 xl:w-7/12 ml-auto"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        {/* Slider item */}
      </Slider>
      {/* Slider buttons */}
      <div className="absolute top-3/5 left-0 w-full px-1 lg:px-2 flex justify-between">
        <button
          onClick={() => sliderBtns.current.slickPrev()}
          className="py-4 px-1 bg-gray-400 hover:bg-[#F0141E]"
        >
          <IoIosArrowBack className="text-white text-lg md:text-xl hover:text-black" />
        </button>
        <button
          onClick={() => sliderBtns.current.slickNext()}
          className="py-4 px-1 bg-gray-400 hover:bg-[#F0141E]"
        >
          <IoIosArrowForward className="text-white text-lg md:text-xl hover:text-black" />
        </button>
      </div>
    </div>
  );
}
