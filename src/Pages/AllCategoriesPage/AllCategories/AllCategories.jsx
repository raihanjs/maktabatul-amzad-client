import useCategories from "../../../hooks/useCategories";
import PageTitle from "../../../Components/PageTitle/PageTitle";
import SingleCategory from "./SingleCategory/SingleCategory";
import { Helmet } from "react-helmet-async";

export default function AllCategories() {
  const [categories, isLoading] = useCategories();
  return (
    <section className="container">
      <Helmet>
        <title>Maktabatul Amzad - Categories</title>
      </Helmet>
      <PageTitle title={["সকল ক্যাটেগরি", "All Categories", "جميع الفئات"]} />

      {/* Categories Container */}
      <div className="flex flex-wrap justify-center mt-5">
        {isLoading ? (
          <>Loading Categories ...</>
        ) : (
          <>
            {categories.map((category) => (
              <SingleCategory
                category={category}
                key={category._id}
              ></SingleCategory>
            ))}
          </>
        )}
      </div>
    </section>
  );
}
