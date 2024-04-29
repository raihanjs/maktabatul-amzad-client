import React from "react";
import { Link } from "react-router-dom";
import { GrStar } from "react-icons/gr";

export default function Highlight() {
  return (
    <div className="md:col-span-4 lg:col-span-2 xl:col-span-1 p-5 bg-black mx-10 md:mx-0">
      <div className="bg-olive py-2 px-4 -ml-10 mr-8 text-center mb-5">
        <p className="text-sm md:text-base lg:text-lg text-white">
          TODAY HIGHLIGHT
        </p>
      </div>
      <div className="flex justify-between items-center pb-2 border-b border-dashed border-gray-400">
        <div className="w-4/12">
          <img
            src="https://www.noor-book.com/publice/covers_cache_webp/1/d/d/5/02f62b4165dd537df60326da06d3724d.jpg.webp"
            className="w-full"
            alt=""
          />
        </div>
        <div className="w-7/12">
          <p className="text-white text-base line-clamp-2">
            Interpretation of the Great Qur'an Interpretation of Ibn Katheer{" "}
          </p>
          <Link
            to=""
            className="text-gray-400 text-sm hover:text-primary hover:underline truncate"
          >
            Ibn Kathir
          </Link>
          <div className="flex">
            <GrStar className="text-sm text-gold" />
            <GrStar className="text-sm text-gold" />
            <GrStar className="text-sm text-gold" />
            <GrStar className="text-sm text-gold" />
            <GrStar className="text-sm text-gold" />
          </div>
          <div className="flex mt-2">
            <del className="text-[#F0141E]">
              <p className="mr-2">
                $<span>25.00</span>
              </p>
            </del>
            <p className="text-primary">
              $<span>25.00</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-2">
        <img
          src="https://www.noor-book.com/publice/covers_cache_webp/1/d/d/5/02f62b4165dd537df60326da06d3724d.jpg.webp"
          className="w-3/12"
          alt=""
        />
        <img
          src="https://www.noor-book.com/publice/covers_cache_webp/1/d/d/5/02f62b4165dd537df60326da06d3724d.jpg.webp"
          className="w-3/12"
          alt=""
        />
        <img
          src="https://www.noor-book.com/publice/covers_cache_webp/1/d/d/5/02f62b4165dd537df60326da06d3724d.jpg.webp"
          className="w-3/12"
          alt=""
        />
      </div>
    </div>
  );
}
