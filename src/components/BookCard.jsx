import { GrStar } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function BookCard() {
  return (
    <div className="book-card w-40 p-2 mx-auto ease-in duration-300">
      <Link to="">
        <img
          src="https://i.ibb.co/gt70w2c/image.jpg"
          className="h-40 md:h-56 mb-1.5 ease-out duration-300"
          alt=""
        />
        <h4 className="text-md md:text-base text-black truncate">
          আস-সিরাজী ফিল মিরাস
        </h4>
        <p className="text-sm text-gray truncate">
          শাইখ সিরাজ উদ্দিন মুহাম্মাদ বিন আব্দুর রশীদ সাজাওয়ান্দি হানাফী
        </p>
        {/* <div className="flex">
          <GrStar className="book-card-star text-sm text-gray" />
          <GrStar className="book-card-star text-sm text-gray" />
          <GrStar className="book-card-star text-sm text-gray" />
          <GrStar className="book-card-star text-sm text-gray" />
          <GrStar className="book-card-star text-sm text-gray" />
        </div> */}
        <div className="flex">
          <p className="text-base text-red">
            $<span>22.00</span>
          </p>
        </div>
      </Link>
    </div>
  );
}
