import { useLoaderData } from "react-router-dom";
import PageTitle from "../../Components/PageTitle/PageTitle";
import useSubCategories from "../../hooks/useSubCategories";
import SingleSubCategory from "./SingleSubCategory/SingleSubCategory";
import { useState } from "react";
import BookCard from "../Shared/BookCard/BookCard";
import { Helmet } from "react-helmet-async";

export default function CategoryPage() {
  const category = useLoaderData();
  const { name, categoryId } = category;
  const [subcategories, isLoading] = useSubCategories();

  const selSubCat = subcategories.filter(
    (subCat) => subCat.mainCategory === categoryId
  );

  const [subBooks, setSubBooks] = useState([]);
  const handleGetSubBooks = (books) => {
    setSubBooks(books);
  };

  return (
    <section className="container">
      <Helmet>
        <title>Maktabatul Amzad - {name[1]}</title>
      </Helmet>
      <PageTitle title={[name[0], name[1], name[2]]} />

      <div className="flex flex-wrap justify-center mt-5">
        {isLoading ? (
          <>Loading Subcategories ...</>
        ) : (
          <>
            {selSubCat.map((subCat) => (
              <SingleSubCategory
                subCat={subCat}
                key={subCat._id}
                handleGetSubBooks={handleGetSubBooks}
              ></SingleSubCategory>
            ))}
          </>
        )}
      </div>

      <div className="flex flex-wrap justify-center">
        {subBooks.length > 0 ? (
          <>
            {subBooks.map((book) => (
              <BookCard key={book._id} book={book}></BookCard>
            ))}
          </>
        ) : (
          <>
            <h3 className="text-xl font-bold text-red text-center mt-20">
              No book found on this subcategory
            </h3>
          </>
        )}
      </div>
    </section>
  );
}
