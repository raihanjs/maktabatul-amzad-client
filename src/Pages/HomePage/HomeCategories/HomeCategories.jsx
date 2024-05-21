import React, { useContext } from "react";
import useCategories from "../../../hooks/useCategories";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../Providers/ThemeProvider";

export default function HomeCategories() {
  const { language } = useContext(ThemeContext);
  const [categories, isLoading] = useCategories();
  return (
    <section className="container mb-12">
      <div className="flex flex-wrap gap-5">
        {categories.map((category) => (
          <Link
            to={`/categories/${category.categoryId}`}
            key={category._id}
            className="py-3 px-12 border border-primary rounded-md hover:bg-primary hover:text-white"
          >
            {category.name[language]}
          </Link>
        ))}
      </div>
    </section>
  );
}
