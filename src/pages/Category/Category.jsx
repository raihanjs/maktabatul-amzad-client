import { useLoaderData } from "react-router-dom";

import BookCard from "../../components/BookCard";
import CategoryBreadCrumb from "./CategoryBreadCrumb";

export default function Category() {
  const category = useLoaderData();
  return (
    <section className="my-12">
      <div className="container">
        <CategoryBreadCrumb categoryName={category?.name} />

        <div className="my-5 md:grid grid-cols-12 gap-5">
          <img src={category?.image} className="col-span-2" alt="" />
        </div>

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
