import { Link } from "react-router-dom";
import { ImBooks } from "react-icons/im";

export default function PublisherCard({ publisher }) {
  return (
    <div className="w-36">
      {publisher.image ? (
        <img
          src={publisher.image}
          className="size-28 rounded-full ring-2 mt-1"
          alt=""
        />
      ) : (
        <ImBooks className="size-28 rounded-full ring-2 mt-1 text-red" />
      )}

      <h3 className="truncate mt-2 font-bold">
        <Link to={`/publisher/${publisher._id}`}>{publisher.name[0]}</Link>
      </h3>
    </div>
  );
}

export function PublisherCardSkeletion() {
  return (
    <div className="w-36 animate-pulse">
      <div className="size-36 bg-slate-200 rounded-full mb-5"></div>
      <div className="h-2 bg-slate-200 rounded"></div>
    </div>
  );
}
