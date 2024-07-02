import { Link } from "react-router-dom";
import useCategories from "../../hooks/useCategories";
import CategoriesBreadCrumb from "./CategoriesBreadCrumb";

export default function Categories() {
  const [categories, isLoading] = useCategories();
  if (isLoading)
    return (
      <section className="my-12">
        <div className="container">
          <div className="border-b border-primary pb-2 mb-5 flex justify-between animate-pulse">
            <div className="h-2 bg-slate-200 w-40"></div>
            <div className="flex space-x-2">
              <div className="h-2 bg-slate-200 w-10"></div>
              <div className="h-2 bg-slate-200 w-10"></div>
              <div className="h-2 bg-slate-200 w-10"></div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 animate-pulse">
            <div className="w-48 md:w-56 p-4 md:p-10 bg-emerald-100"></div>
            <div className="w-48 md:w-56 p-4 md:p-10 bg-emerald-100"></div>
            <div className="w-48 md:w-56 p-4 md:p-10 bg-emerald-100"></div>
            <div className="w-48 md:w-56 p-4 md:p-10 bg-emerald-100"></div>
            <div className="w-48 md:w-56 p-4 md:p-10 bg-emerald-100"></div>
            <div className="w-48 md:w-56 p-4 md:p-10 bg-emerald-100"></div>
            <div className="w-48 md:w-56 p-4 md:p-10 bg-emerald-100"></div>
            <div className="w-48 md:w-56 p-4 md:p-10 bg-emerald-100"></div>
            <div className="w-48 md:w-56 p-4 md:p-10 bg-emerald-100"></div>
            <div className="w-48 md:w-56 p-4 md:p-10 bg-emerald-100"></div>
            <div className="w-48 md:w-56 p-4 md:p-10 bg-emerald-100"></div>
            <div className="w-48 md:w-56 p-4 md:p-10 bg-emerald-100"></div>
            <div className="w-48 md:w-56 p-4 md:p-10 bg-emerald-100"></div>
            <div className="w-48 md:w-56 p-4 md:p-10 bg-emerald-100"></div>
            <div className="w-48 md:w-56 p-4 md:p-10 bg-emerald-100"></div>
          </div>
        </div>
      </section>
    );

  return (
    <section className="my-12">
      <div className="container">
        <CategoriesBreadCrumb />

        <div className="flex flex-wrap justify-center md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5">
          {categories.map((category) => (
            <div
              key={category._id}
              className="w-48 md:w-56 p-4 md:p-10 bg-emerald-100"
            >
              <h4 className="text-center">
                <Link to={`/category/${category?._id}`}>
                  {category?.name[0]}
                </Link>
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
