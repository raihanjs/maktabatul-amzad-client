import { GrStar } from "react-icons/gr";
import { Link } from "react-router-dom";
import "./BookCard.css";
const BookCard = ({ book }) => {
  const { title, thumb, price, writerDetails } = book;

  return (
    <div className="book-card w-40 h-[320px] overflow-hidden ease-in duration-300">
      {/* Image */}
      <Link to={`/book/${book._id}`}>
        <img
          src={`${thumb}`}
          className="h-40 md:h-56 bg-slate-200 mb-1.5 ease-out duration-300"
          alt=""
        />
      </Link>
      {/* Book Content */}
      <div className="book-summary bg-white">
        <h4 className="text-base text-black truncate">{title[1]}</h4>
        {/* <p className="truncate">
          {writerDetails.map((writer) => (
            <span key={writer._id}>{writer.name[1]}, </span>
          ))}
        </p> */}
        {/* Rating */}
        <div className="flex">
          <GrStar className="book-card-star text-sm text-gray-400" />
          <GrStar className="book-card-star text-sm text-gray-400" />
          <GrStar className="book-card-star text-sm text-gray-400" />
          <GrStar className="book-card-star text-sm text-gray-400" />
          <GrStar className="book-card-star text-sm text-gray-400" />
        </div>
        <div className="flex">
          <p className="text-base font-bold">
            <span className="text-[#F0141E]">{price?.[1]}</span>
            &nbsp;TK
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
