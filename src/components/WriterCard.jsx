import { Link } from "react-router-dom";

export default function WriterCard({ writer }) {
  return (
    <div className="w-36">
      <img
        src={writer.image}
        className="size-28 rounded-full ring-2 mt-1"
        alt=""
      />
      <h3 className="truncate mt-2 font-bold">
        <Link to={`/writer/${writer._id}`}>{writer.name[0]}</Link>
      </h3>
    </div>
  );
}

export function WriterCardSkeletion() {
  return (
    <div className="w-36 animate-pulse">
      <div className="size-36 bg-slate-200 rounded-full mb-5"></div>
      <div className="h-2 bg-slate-200 rounded"></div>
    </div>
  );
}
