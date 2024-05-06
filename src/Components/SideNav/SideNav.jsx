import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ThemeContext } from "../../Providers/ThemeProvider";
import useCategories from "../../hooks/useCategories";
import useBooks from "../../hooks/useBooks";

export default function SideNav() {
  const navigate = useNavigate();
  const { language } = useContext(ThemeContext);

  const [categories] = useCategories();

  const handleRange = (gte, lte) => {
    const range = { gte, lte };
    navigate("/books", { state: { range } });
  };

  const url = window.location.pathname;

  return (
    <div className="w-[250px] pr-5 border-r hidden md:block">
      {url === "/" && (
        <p className="font-bold pb-2 mb-5 border-b">
          {language === 0
            ? "বই  দেখুন"
            : language === 2
            ? "انظر الكتاب"
            : "BROWSE BOOKS"}
        </p>
      )}

      {/* Subject */}
      <div className="my-2">
        <p className="font-semibold">
          {language === 0 ? "বিষয়" : language === 2 ? "موضوع" : "SUBJECT"}
        </p>
        <ul>
          {categories.map((category) => (
            <li key={category._id} className="hover:text-red truncate ml-2">
              <Link to={`/categories/${category.categoryId}`}>
                {category?.name[language]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Price */}
      <div className="my-2">
        <p className="font-semibold">
          {language === 0 ? "দাম" : language === 2 ? "سعر" : "PRICE"}
        </p>
        <ul>
          <li className="ml-2">
            <p
              className="hover:text-red cursor-pointer"
              onClick={() => handleRange(50, 100)}
            >
              TK - 50-100
            </p>
            <p
              className="hover:text-red cursor-pointer"
              onClick={() => handleRange(101, 300)}
            >
              TK - 101-300
            </p>
            <p
              className="hover:text-red cursor-pointer"
              onClick={() => handleRange(301, 500)}
            >
              TK - 301-500
            </p>
            <p
              className="hover:text-red cursor-pointer"
              onClick={() => handleRange(501, 1000)}
            >
              TK - 501-1000
            </p>
            <p
              className="hover:text-red cursor-pointer"
              onClick={() => handleRange(1001, 2000)}
            >
              TK - 1001-2000
            </p>
            <p
              className="hover:text-red cursor-pointer"
              onClick={() => handleRange(2001, 3000)}
            >
              TK - 2001-3000
            </p>
            <p
              className="hover:text-red cursor-pointer"
              onClick={() => handleRange(3000)}
            >
              TK - 3000+
            </p>
          </li>
        </ul>
      </div>
      {/* Special Books
      <div className="my-2">
        <p className="font-semibold">
          {language === 0
            ? "বিশেষ বই"
            : language === 2
            ? "كتب خاصة"
            : "SPECIAL BOOKS"}
        </p>
        <div className="">
          {books.slice(0, 2).map((book) => (
            <BookCard book={book} key={book._id}></BookCard>
          ))}
        </div>
      </div> */}
    </div>
  );
}
