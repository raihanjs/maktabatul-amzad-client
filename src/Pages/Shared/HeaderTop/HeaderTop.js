import React, { useRef, useState } from "react";
import {} from "./HeaderTop.css";
import {
  BsFillTelephoneFill,
  BsEnvelopeFill,
  BsCartCheckFill,
  BsGlobe,
  BsFillPersonFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const HeaderTop = () => {
  const accountMenuRef = useRef();
  const [accountIsOpen, setAccountIsOpen] = useState(false);

  window.addEventListener("click", (e) => {
    if (e.target !== accountMenuRef.current) {
      setAccountIsOpen(false);
    }
  });

  const languageMenuRef = useRef();
  const [language, setLanguage] = useState("eng");
  console.log(language);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  window.addEventListener("click", (e) => {
    if (e.target !== languageMenuRef.current) {
      setLanguageMenuOpen(false);
    }
  });

  return (
    <div className="py-2 bg-black text-gray text-sm">
      <div className="container mx-auto px-0.5  sm:px-3 md:px-0">
        <div className="flex justify-center md:justify-between">
          {/* Headertop left area start */}
          <div className="hidden md:flex">
            <a href="tel:+8801734768772" className="flex items-center mr-5">
              {" "}
              <BsFillTelephoneFill className="mr-1" />
              (880) 1734768772
            </a>
            <a href="mailto:amjad@gmail.com" className="flex items-center mr-5">
              {" "}
              <BsEnvelopeFill className="mr-1" />
              amjad@gmail.com
            </a>
          </div>
          {/* Headertop left area end */}
          {/* Headertop right area start */}
          <div className="flex items-center">
            <div className="flex items-center mr-1 sm:mr-5 relative">
              <BsCartCheckFill className="mr-1" /> Cart (
              <span className="text-red">0 item</span>)
              <div className="cart-menu absolute top-5 right-0 hidden hover:block">
                <h1>Hello</h1>
              </div>
            </div>
            {/* Language Menu Start */}
            <div
              className="flex items-center mr-1 sm:mr-5 relative cursor-pointer"
              ref={languageMenuRef}
              onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
            >
              <BsGlobe className="mr-1" /> Language
              {languageMenuOpen && (
                <div className="absolute top-6 left-0 z-40">
                  <div className="bg-red flex flex-col">
                    <p
                      className="py-2 pl-8 pr-20 hover:bg-gray hover:text-white"
                      onClick={() => setLanguage("eng")}
                    >
                      Bangla
                    </p>
                    <p
                      className="py-2 pl-8 pr-20 hover:bg-gray hover:text-white"
                      onClick={() => setLanguage("bd")}
                    >
                      English
                    </p>
                    <p
                      className="py-2 pl-8 pr-20 hover:bg-gray hover:text-white"
                      onClick={() => setLanguage("arabic")}
                    >
                      Arabic
                    </p>
                  </div>
                </div>
              )}
            </div>
            {/* Language Menu End */}
            <div
              className="flex items-center relative cursor-pointer"
              ref={accountMenuRef}
              onClick={() => setAccountIsOpen(!accountIsOpen)}
            >
              <BsFillPersonFill className="mr-1" /> Account
              {accountIsOpen && (
                <div className="absolute top-6 right-0 z-40 ">
                  <div className="bg-red flex flex-col">
                    <Link
                      className="text-base text-black py-2 pl-8 pr-20 hover:bg-gray hover:text-white"
                      to=""
                    >
                      My Profile
                    </Link>
                    <Link
                      className="text-base text-black py-2 pl-8 pr-20 hover:bg-gray hover:text-white"
                      to=""
                    >
                      BookMark
                    </Link>
                    <Link
                      className="text-base text-black py-2 pl-8 pr-20 hover:bg-gray hover:text-white"
                      to=""
                    >
                      My Cart
                    </Link>
                    <Link
                      className="text-base text-black py-2 pl-8 pr-20 hover:bg-gray hover:text-white border-t"
                      to=""
                    >
                      Logout
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Headertop right area end */}
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
