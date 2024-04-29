import React, { useRef, useState } from "react";
import { BsGlobe } from "react-icons/bs";

export default function HeaderTopLanguage() {
  const languageMenuRef = useRef(null);
  const [changeLang, setChangeLang] = useState(false);

  window.addEventListener("click", (e) => {
    if (e.target !== languageMenuRef.current) {
      setChangeLang(false);
    }
  });

  return (
    <div className="relative z-50">
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
            <li className="py-2 pl-5 pr-12 cursor-pointer hover:bg-gray-100 text-gray-900 font-medium">
              Bangla
            </li>
            <li className="py-2 pl-5 pr-12 cursor-pointer hover:bg-gray-100 text-gray-900 font-medium">
              English
            </li>
            <li className="py-2 pl-5 pr-12 cursor-pointer hover:bg-gray-100 text-gray-900 font-medium">
              Arabic
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
