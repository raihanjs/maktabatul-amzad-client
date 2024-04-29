import useCategories from "../../../hooks/useCategories";
import PageTitle from "../../../Components/PageTitle/PageTitle";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../../Providers/ThemeProvider";

export default function AllCategories() {
  const { language } = useContext(ThemeContext);
  const [categories, isLoading, refetch] = useCategories();
  return (
    <section className="container">
      <PageTitle title={["সকল ক্যাটেগরি", "All Categories", "جميع الفئات"]} />

      {/* Categories Container */}
      <div className="flex flex-wrap mt-5">
        {isLoading ? (
          <>Loading....</>
        ) : (
          <>
            {categories.map((category) => (
              <Link
                to=""
                key={category._id}
                className="bg-primary py-2 px-6 m-2 rounded-sm text-white capitalize border border-primary hover:bg-transparent hover:text-primary"
              >
                {category.name[language]}
              </Link>
            ))}
          </>
        )}
      </div>
    </section>
  );
}
