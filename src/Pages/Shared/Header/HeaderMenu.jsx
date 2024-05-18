import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../Providers/ThemeProvider";

export default function HeaderMenu() {
  const { language } = useContext(ThemeContext);
  return (
    <ul className="flex items-center space-x-2 md:space-x-4 text-white font-medium">
      <li>
        <Link to="/" className="text-md lg:text-lg capitalize">
          {language === 0 ? "হোম" : language === 2 ? "بيت" : "home"}
        </Link>
      </li>
      <li>
        <Link to="/books" className="text-md lg:text-lg capitalize">
          {language === 0 ? "বই" : language === 2 ? "كتب" : "books"}
        </Link>
      </li>
      <li>
        <Link to="/writers" className="text-md lg:text-lg capitalize">
          {language === 0 ? "লেখক" : language === 2 ? "الكتاب" : "writers"}
        </Link>
      </li>
      <li>
        <Link to="/categories" className="text-md lg:text-lg capitalize">
          {language === 0 ? "ক্যাটেগরি" : language === 2 ? "فئة" : "category"}
        </Link>
      </li>
      <li>
        <Link to="/about" className="text-md lg:text-lg capitalize">
          {language === 0 ? "আমাদের সম্পর্কে" : language === 2 ? "عن" : "about"}
        </Link>
      </li>
    </ul>
  );
}
