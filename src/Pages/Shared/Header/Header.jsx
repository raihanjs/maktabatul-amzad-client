import { Link } from "react-router-dom";
import React, { useContext, useRef, useState } from "react";
import HeaderSearch from "./HeaderSearch";
import { ThemeContext } from "../../../Providers/ThemeProvider";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const { language } = useContext(ThemeContext);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="bg-[#108D41] py-2 sticky top-0 left-0 z-30">
      <div className="container px-2 md:px-0">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="">
            <img
              src="https://i.ibb.co/0sPhz6P/logo.png"
              className="h-6 md:h-8 lg:h-10"
              alt=""
            />
          </Link>
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-2 md:space-x-4 text-white font-medium">
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
                {language === 0
                  ? "লেখক"
                  : language === 2
                  ? "الكتاب"
                  : "writers"}
              </Link>
            </li>
            <li>
              <Link to="/publishers" className="text-md lg:text-lg capitalize">
                {language === 0
                  ? "প্রকাশক"
                  : language === 2
                  ? "الناشرين"
                  : "publishers"}
              </Link>
            </li>
            <li>
              <Link to="/categories" className="text-md lg:text-lg capitalize">
                {language === 0
                  ? "ক্যাটেগরি"
                  : language === 2
                  ? "فئة"
                  : "category"}
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-md lg:text-lg capitalize">
                {language === 0
                  ? "আমাদের সম্পর্কে"
                  : language === 2
                  ? "عن"
                  : "about"}
              </Link>
            </li>
          </ul>
          <div className="flex gap-2 items-center">
            <HeaderSearch />
            {/* Mobile Menu */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="block md:hidden z-50"
            >
              <FaBars className="text-2xl text-white cursor-pointer" />
            </button>
            {mobileMenu && (
              <ul className="fixed md:hidden top-0 left-0 h-screen bg-red py-10">
                <li
                  className="px-10 py-2 hover:bg-white"
                  onClick={() => setMobileMenu(false)}
                >
                  <Link to="/" className="text-md lg:text-lg capitalize block">
                    {language === 0 ? "হোম" : language === 2 ? "بيت" : "home"}
                  </Link>
                </li>
                <li
                  className="px-10 py-2 hover:bg-white"
                  onClick={() => setMobileMenu(false)}
                >
                  <Link
                    to="/books"
                    className="text-md lg:text-lg capitalize block"
                  >
                    {language === 0 ? "বই" : language === 2 ? "كتب" : "books"}
                  </Link>
                </li>
                <li
                  className="px-10 py-2 hover:bg-white"
                  onClick={() => setMobileMenu(false)}
                >
                  <Link
                    to="/writers"
                    className="text-md lg:text-lg capitalize block"
                  >
                    {language === 0
                      ? "লেখক"
                      : language === 2
                      ? "الكتاب"
                      : "writers"}
                  </Link>
                </li>
                <li
                  className="px-10 py-2 hover:bg-white"
                  onClick={() => setMobileMenu(false)}
                >
                  <Link
                    to="/publishers"
                    className="text-md lg:text-lg capitalize block"
                  >
                    {language === 0
                      ? "প্রকাশক"
                      : language === 2
                      ? "الناشرين"
                      : "publishers"}
                  </Link>
                </li>
                <li
                  className="px-10 py-2 hover:bg-white"
                  onClick={() => setMobileMenu(false)}
                >
                  <Link
                    to="/categories"
                    className="text-md lg:text-lg capitalize block"
                  >
                    {language === 0
                      ? "ক্যাটেগরি"
                      : language === 2
                      ? "فئة"
                      : "category"}
                  </Link>
                </li>
                <li
                  className="px-10 py-2 hover:bg-white"
                  onClick={() => setMobileMenu(false)}
                >
                  <Link
                    to="/about"
                    className="text-md lg:text-lg capitalize block"
                  >
                    {language === 0
                      ? "আমাদের সম্পর্কে"
                      : language === 2
                      ? "عن"
                      : "about"}
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
