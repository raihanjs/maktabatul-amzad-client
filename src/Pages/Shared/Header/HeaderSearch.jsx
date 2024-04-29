import React from "react";

export default function HeaderSearch() {
  return (
    <div className="w-[200px] lg:w-[280px] flex items-center">
      <input
        type="text"
        placeholder="Search..."
        className="top-0 left-0 w-full py-1 px-3 focus-within:outline-0 rounded-l-sm"
      />
      <button className="bg-[#F0141E] text-white py-1.5 px-3 border-1.5 border-[#F0141E]  rounded-r-sm text-sm">
        Search
      </button>
    </div>
  );
}
