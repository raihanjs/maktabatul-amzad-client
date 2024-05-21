import React, { useContext, useRef, useState } from "react";
import { BsGlobe } from "react-icons/bs";
import { ThemeContext } from "../../../Providers/ThemeProvider";

export default function HeaderTopLanguage() {
  const languageMenuRef = useRef(null);
  const [changeLang, setChangeLang] = useState(false);

  window.addEventListener("click", (e) => {
    if (e.target !== languageMenuRef.current) {
      setChangeLang(false);
    }
  });

  const { handleLanguage } = useContext(ThemeContext);

  return (
    <div className="relative z-40">
      <button
        className="flex items-center"
        ref={languageMenuRef}
        onClick={() => setChangeLang(!changeLang)}
      >
        <BsGlobe className="text-md mr-1" /> Language
      </button>
      {/* Select Language */}
      {changeLang && (
        <div>
          <ul className="absolute bg-white rounded-sm overflow-hidden border py-2">
            <li
              className="py-2 pl-5 pr-12 cursor-pointer hover:bg-gray-100 text-gray-900 font-medium"
              onClick={() => handleLanguage(0)}
            >
              Bangla
            </li>
            <li
              className="py-2 pl-5 pr-12 cursor-pointer hover:bg-gray-100 text-gray-900 font-medium"
              onClick={() => handleLanguage(1)}
            >
              English
            </li>
            <li
              className="py-2 pl-5 pr-12 cursor-pointer hover:bg-gray-100 text-gray-900 font-medium"
              onClick={() => handleLanguage(2)}
            >
              Arabic
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
