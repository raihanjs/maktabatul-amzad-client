import React from "react";

export default function BooksFilter({ itemsPerpage, setItemsPerpage }) {
  const handleItemsPerpage = (e) => {
    const selected = parseInt(e.target.value);
    setItemsPerpage(selected);
  };
  return (
    <div className="flex justify-end py-5">
      <div className="flex space-x-5">
        <select
          value={itemsPerpage}
          className="border px-3"
          onChange={handleItemsPerpage}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="40">40</option>
          <option value="80">80</option>
          <option value="100">100</option>
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
