import React, { useContext } from "react";
import { ThemeContext } from "../../Providers/ThemeProvider";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

export default function PageTitle({ title }) {
  const { language } = useContext(ThemeContext);
  return (
    <div className="border-b border-primary mt-5 mx-2 md:mx-0">
      <div className="flex justify-between items-center">
        <h3 className="text-xs md:text-md lg:text-xl font-semibold text-primary capitalize">
          {language === 0 ? title[0] : language === 2 ? title[2] : title[1]}
        </h3>

        <div className="flex items-center">
          <Link to="/" className="text-primary text-xs md:text-md">
            {language === 0 ? "হোম" : language === 2 ? "بيت" : "Home"}
          </Link>
          <LiaLongArrowAltRightSolid className="mx-2" />
          <span className="capitalize text-xs md:text-md">
            {language === 0 ? title[0] : language === 2 ? title[2] : title[1]}
          </span>
        </div>
      </div>
    </div>
  );
}
