import { Link } from "react-router-dom";
import useCategories from "../../hooks/useCategories";

export default function HomeCategories() {
  const [categories, isLoading, refetch] = useCategories();

  if (isLoading)
    return (
      <section className="py-12 mb-5 md:mb-10">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="animate-pulse h-12 bg-slate-200 rounded-md w-48 m-2"></div>
            <div className="animate-pulse h-12 bg-slate-200 rounded-md w-48 m-2"></div>
            <div className="animate-pulse h-12 bg-slate-200 rounded-md w-48 m-2"></div>
            <div className="animate-pulse h-12 bg-slate-200 rounded-md w-48 m-2"></div>
            <div className="animate-pulse h-12 bg-slate-200 rounded-md w-48 m-2"></div>
            <div className="animate-pulse h-12 bg-slate-200 rounded-md w-48 m-2"></div>
            <div className="animate-pulse h-12 bg-slate-200 rounded-md w-48 m-2"></div>
            <div className="animate-pulse h-12 bg-slate-200 rounded-md w-48 m-2"></div>
            <div className="animate-pulse h-12 bg-slate-200 rounded-md w-48 m-2"></div>
            <div className="animate-pulse h-12 bg-slate-200 rounded-md w-48 m-2"></div>
            <div className="animate-pulse h-12 bg-slate-200 rounded-md w-48 m-2"></div>
            <div className="animate-pulse h-12 bg-slate-200 rounded-md w-48 m-2"></div>
          </div>
        </div>
      </section>
    );

  return (
    <section className="py-12 mb-5 md:mb-10">
      <div className="container">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-5">
          {categories.map((category) => (
            <Link
              key={category._id}
              className="py-2 md:py-4 px-3 md:px-5 border text-gray-600 hover:text-white left-to-right-hover text-white rounded-md font-medium truncate"
            >
              {category.name[0]}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
