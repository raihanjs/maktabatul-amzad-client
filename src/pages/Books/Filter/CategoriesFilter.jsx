import useCategories from "../../../hooks/useCategories";

export default function CategoriesFilter() {
  const [categories, isLoading] = useCategories();

  return (
    <div className="p-4 border-b bg-white filter">
      <p className="mb-3 font-bold text-lg">Shop By Categories</p>

      <form className="max-h-60 overflow-y-scroll">
        {categories.map((category) => (
          <div key={category._id} className="flex items-center space-x-2">
            <input
              type="checkbox"
              name={category.name}
              id={category._id}
              value={category?.name}
            />
            <label htmlFor={category._id} className="truncate">
              {category.name[0]}
            </label>
          </div>
        ))}
      </form>
    </div>
  );
}
