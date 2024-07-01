import useWriters from "../../../hooks/useWriters";

export default function WritersFilter() {
  const [writers, isLoading] = useWriters();
  return (
    <div className="p-4 border-b bg-white filter">
      <p className="mb-3 font-bold text-lg">Writer</p>
      <form className="max-h-60 overflow-y-scroll">
        {writers.map((writer) => (
          <div key={writer._id} className="flex items-center space-x-2">
            <input
              type="checkbox"
              name={writer.name}
              id={writer._id}
              value={writer?.name}
            />
            <label htmlFor={writer._id} className="truncate">
              {writer.name[0]}
            </label>
          </div>
        ))}
      </form>
    </div>
  );
}
