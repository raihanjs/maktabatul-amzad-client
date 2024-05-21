import React, { useContext } from "react";
import useCategories from "../../../hooks/useCategories";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../Providers/ThemeProvider";

export default function HomeCategories() {
  const { language } = useContext(ThemeContext);
  const [categories, isLoading] = useCategories();
  return (
    <section className="my-12 mx-2 md:mx-0">
      <div className="container">
        <div className="flex flex-wrap gap-2 md:gap-5">
          {categories.map((category) => (
            <Link
              to={`/categories/${category.categoryId}`}
              key={category._id}
              className="py-1.5 md:py-3 px-4 md:px-8 border border-primary rounded-md hover:bg-primary hover:text-white text-sm md:text-md"
            >
              {category.name[language]}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
