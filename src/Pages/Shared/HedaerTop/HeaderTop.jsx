import React, { useState } from "react";
import {
  BsFillTelephoneFill,
  BsEnvelopeFill,
  BsCartCheckFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import HeaderTopLanguage from "./HeaderTopLanguage";
import HeaderTopAccount from "./HeaderTopAccount";

export default function HeaderTop() {
  return (
    <div className="py-2 bg-black text-gray-300 text-sm fw-medium">
      <div className="container">
        <div className="flex items-center justify-center md:justify-between">
          {/* Headertop Social Links */}
          <div className="hidden sm:flex items-center space-x-4">
            {/* Link Item */}
            <a href="tel:+880145544744484" className="flex items-center">
              <BsFillTelephoneFill className="text-md mr-1" /> (880)
              145544744484
            </a>
            {/* Link Item */}
            <a href="mailto:amjad@gmail.com" className="flex items-center">
              <BsEnvelopeFill className="text-md mr-1" /> amjad@gmail.com
            </a>
          </div>
          {/* Headertop Settings and Account info */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <div>
              <Link className="flex items-center">
                <BsCartCheckFill className="text-md mr-1 -mt-1" />
                Cart (<span className="text-[#f0141e]">0 item</span>)
              </Link>
            </div>
            <HeaderTopLanguage />
            <HeaderTopAccount />
          </div>
        </div>
      </div>
    </div>
  );
}
