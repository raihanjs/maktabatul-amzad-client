import { GrStar } from "react-icons/gr";
import { Link } from "react-router-dom";
import "./BookCard.css";
import { useContext } from "react";
import { ThemeContext } from "../../../Providers/ThemeProvider";
import { CartContext } from "../../../Providers/CartProviders";
const BookCard = ({ book }) => {
  const { language } = useContext(ThemeContext);
  const { handleAddtoCart } = useContext(CartContext);
  const {
    title,
    thumb,
    price,
    writerDetails,
    status,
    stock,
    showWriters,
    showPrice,
    showStatus,
  } = book;

  return (
    <div className="book-card w-40 h-[320px] overflow-hidden ease-in duration-300 m-2">
      <Link to={`/books/${book._id}`}>
        <img
          src={`${thumb}`}
          className="h-40 md:h-56 bg-slate-200 mb-1.5 ease-out duration-300 mx-auto"
          alt=""
        />
      </Link>
      <div className="book-summary bg-white">
        <h4 className="text-base text-black truncate">
          {title[language].length > 0 ? (
            <>{title[language]}</>
          ) : (
            <>Not Available</>
          )}
        </h4>

        {showWriters ? (
          <p className="truncate">
            {writerDetails.length > 0 ? (
              <>
                {writerDetails.map((item) => (
                  <span key={item._id}>
                    {item.name[language].length > 0 ? (
                      <>{item.name[language]}</>
                    ) : (
                      <>Not Available</>
                    )}
                    ,
                  </span>
                ))}
              </>
            ) : (
              <>Not Available</>
            )}
          </p>
        ) : (
          <p>Writers Name Hidden</p>
        )}

        <div className="flex">
          <GrStar className="book-card-star text-sm text-gray-400" />
          <GrStar className="book-card-star text-sm text-gray-400" />
          <GrStar className="book-card-star text-sm text-gray-400" />
          <GrStar className="book-card-star text-sm text-gray-400" />
          <GrStar className="book-card-star text-sm text-gray-400" />
        </div>
        {showPrice ? (
          <div className="flex">
            <p className="text-base text-red">
              BDT <span>{price} TK</span>
            </p>
          </div>
        ) : (
          <p className="text-base">Price is hidden</p>
        )}
        {showStatus ? (
          <div>
            {status === "upcoming" ? (
              <>
                <button className="bg-slate-700 text-sm text-white font-semibold w-full text-center py-2">
                  {language == 0
                    ? "আপকামিং"
                    : language == 2
                    ? "القادمة"
                    : "Upcoming"}
                </button>
              </>
            ) : stock == 0 ? (
              <>
                <button className="bg-red text-sm text-white font-semibold w-full text-center py-2">
                  {language == 0
                    ? "ষ্টক আউট"
                    : language == 2
                    ? "المخزن نفذ"
                    : "Stock Out"}
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => handleAddtoCart(book)}
                  className="bg-primary text-sm text-white font-semibold w-full text-center py-2"
                >
                  {language == 0
                    ? "কার্টে যোগ করুন"
                    : language == 2
                    ? "أضف إلى السلة"
                    : "Add to cart"}
                </button>
              </>
            )}
          </div>
        ) : (
          <div>
            <button className="bg-slate-700 text-sm text-white font-semibold w-full text-center py-2">
              Not Available
            </button>
          </div>
        )}
        <div></div>
      </div>
    </div>
  );
};

export default BookCard;
