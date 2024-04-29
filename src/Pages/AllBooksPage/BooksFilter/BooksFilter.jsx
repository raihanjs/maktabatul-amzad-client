import React from "react";

export default function BooksFilter() {
  return (
    <div className="flex justify-end py-5">
      <div className="flex space-x-5">
        <select name="" id="" className="border px-3">
          <option value="">20</option>
          <option value="">40</option>
          <option value="">80</option>
          <option value="">100</option>
        </select>

        <select name="" id="" className="border px-3">
          <option value="">Default</option>
          <option value="">Low to High</option>
          <option value="">High to Low</option>
        </select>
      </div>
    </div>
  );
}
