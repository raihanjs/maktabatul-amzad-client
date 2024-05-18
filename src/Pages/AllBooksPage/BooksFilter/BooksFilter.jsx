import React from "react";

export default function BooksFilter({
  sort,
  setSort,
  // itemsPerpage,
  setItemsPerpage,
}) {
  const handleItemsPerpage = (e) => {
    const selected = parseInt(e.target.value);
    setItemsPerpage(selected);
  };
  return (
    <div className="flex justify-end py-5">
      <div className="flex space-x-5">
        {/* <select
          value={itemsPerpage}
          className="border px-3"
          onChange={handleItemsPerpage}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="40">40</option>
          <option value="80">80</option>
          <option value="100">100</option>
        </select> */}

        <select
          value={sort}
          className="border px-3"
          onChange={(event) => setSort(event.target.value)}
        >
          <option value="1">Low to High</option>
          <option value="-1">High to Low</option>
        </select>
      </div>
    </div>
  );
}
