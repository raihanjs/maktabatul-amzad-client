import { Link, useLoaderData } from "react-router-dom";

import BookCard from "../../components/BookCard";
import CategoryBreadCrumb from "./CategoryBreadCrumb";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";

export default function Category() {
  const axiosPublic = useAxiosPublic();
  const category = useLoaderData();

  const [subCategories, setSubCategories] = useState([]);
  useEffect(() => {
    axiosPublic.get("/subcategories").then((res) => {
      const subCategories = res.data;
      const matchedSubCategories = subCategories.filter(
        (subcategory) => subcategory.category === category._id
      );
      setSubCategories(matchedSubCategories);
    });
  }, []);

  return (
    <section className="my-12">
      <div className="container">
        <CategoryBreadCrumb categoryName={category?.name} />

        <p className="text-md font-bold text-primary mb-5">
          {category?.name[0]} ক্যাটেগরির এর সাবক্যাটেগরি
        </p>
        <div className="flex flex-wrap justify-center gap-5">
          {subCategories.map((subCategory) => (
            <div
              key={subCategory._id}
              className="w-48 md:w-56 p-4 md:p-10 bg-emerald-100"
            >
              <h4 className="text-center">
                <Link to={`/subCategory/${subCategory?._id}`}>
                  {subCategory?.name[0]}
                </Link>
              </h4>
            </div>
          ))}
        </div>

        <div className="my-5">
          <p className="text-md font-bold text-primary mb-5">
            {category?.name[0]} ক্যাটেগরির এর বইসমুহ
          </p>
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
