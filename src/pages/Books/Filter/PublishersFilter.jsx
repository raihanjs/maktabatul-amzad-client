import usePublishers from "../../../hooks/usePublishers";

export default function PublishersFilter() {
  const [publishers, isLoading] = usePublishers();
  return (
    <div className="p-4 border-b bg-white filter">
      <p className="mb-3 font-bold text-lg">Publisher</p>
      <form className="max-h-60 overflow-y-scroll">
        {publishers.map((publisher) => (
          <div key={publisher._id} className="flex items-center space-x-2">
            <input
              type="checkbox"
              name={publisher.name}
              id={publisher._id}
              value={publisher?.name}
            />
            <label htmlFor={publisher._id} className="truncate">
              {publisher.name[0]}
            </label>
          </div>
        ))}
      </form>
    </div>
  );
}
