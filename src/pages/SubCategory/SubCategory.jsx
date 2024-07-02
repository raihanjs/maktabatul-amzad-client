import { useLoaderData } from "react-router-dom";
import BookCard from "../../components/BookCard";
import SubCategoryBreadCrumb from "./SubCategoryBreadCrumb";
import useCategories from "../../hooks/useCategories";

export default function SubCategory() {
  const subCategory = useLoaderData();
  const [categories, isLoading] = useCategories();
  const matchedCategory = categories.find(
    (category) => category._id === subCategory.category
  );

  return (
    <section className="my-12">
      <div className="container">
        <SubCategoryBreadCrumb
          subCategoryName={subCategory?.name}
          category={matchedCategory}
        />

        <div className="my-5">
          <div className="flex flex-wrap justify-center">
            <BookCard margin="m-2" />
            <BookCard margin="m-2" />
            <BookCard margin="m-2" />
            <BookCard margin="m-2" />
            <BookCard margin="m-2" />
            <BookCard margin="m-2" />
            <BookCard margin="m-2" />
            <BookCard margin="m-2" />
            <BookCard margin="m-2" />
            <BookCard margin="m-2" />
          </div>
        </div>
      </div>
    </section>
  );
}
