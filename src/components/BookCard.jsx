import { Link } from "react-router-dom";

export default function BookCard() {
  return (
    <div className="book-card w-40 overflow-hidden ">
      <div className="book-card-image relative">
        <img src="https://i.ibb.co/gt70w2c/image.jpg" className="" alt="" />
        <div className="absolute bottom-3 left-0 w-full flex justify-center">
          <button className="hidden py-2.5 px-4 bg-black text-white hover:text-black hover:bg-white border border-black">
            ADD TO CART
          </button>
        </div>
      </div>

      <div className="mt-3">
        <h4 className="truncate hover:underline">
          <Link to="">আস-সিরাজী ফিল মিরাস</Link>
        </h4>
        <p className="truncate text-gray-500">
          শাইখ সিরাজ উদ্দিন মুহাম্মাদ বিন আব্দুর রশীদ সাজাওয়ান্দি হানাফী
        </p>
        <p className="text-red font-bold">Tk 220</p>
      </div>
    </div>
  );
}

export function BookCardSkeletion() {
  return (
    <div className="w-40 p-2 ease-in duration-300 animate-pulse">
      <div className="h-40 bg-slate-200 rounded mb-3"></div>
      <div className="h-2 bg-slate-200 rounded mb-2"></div>
      <div className="h-2 bg-slate-200 rounded mb-2"></div>
      <div className="h-2 w-20 bg-slate-200 rounded"></div>
    </div>
  );
}
