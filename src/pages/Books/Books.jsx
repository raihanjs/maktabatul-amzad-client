import { useState } from "react";
import BookCard from "../../components/BookCard";
import SortFilter from "./Filter/SortFilter";
import CategoriesFilter from "./Filter/CategoriesFilter";
import PublishersFilter from "./Filter/PublishersFilter";
import WritersFilter from "./Filter/WritersFilter";

import { GrSort } from "react-icons/gr";
import { LuListFilter } from "react-icons/lu";
import { Link } from "react-router-dom";
import BooksBreadCrumb from "./BooksBreadCrumb";

export default function Books() {
  const [showSort, setShowSort] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  const handleShowSort = (e) => {
    const closeOverlay = e.target.className.includes("overlay");
    closeOverlay && setShowSort(false);
  };

  const handleShowFilter = (e) => {
    const closeOverlay = e.target.className.includes("overlay");
    closeOverlay && setShowFilter(false);
  };

  return (
    <section className="my-12">
      <div className="container">
        <BooksBreadCrumb />

        {/* Mobile sort and filter button */}
        <div className="block md:hidden flex items-center space-x-12 justify-center mb-5">
          <button
            className="flex items-center"
            onClick={() => setShowSort(!showSort)}
          >
            <GrSort className="mr-1" /> Sort
          </button>
          <button
            className="flex items-center"
            onClick={() => setShowFilter(!showFilter)}
          >
            <LuListFilter className="mr-1" /> Filter
          </button>
        </div>
        {/* Mobile sort and filter button */}

        <div className="md:flex justify-between md:space-x-3 items-start">
          <div className="">
            {/* Sort options for mobile */}
            {showSort && (
              <div
                className="overlay block md:hidden fixed top-0 left-0 z-40 h-full w-full bg-gray-500/75"
                onClick={handleShowSort}
              >
                <div className="fixed w-full bottom-0">
                  <SortFilter />
                </div>
              </div>
            )}
            {/* Sort options for desktop */}
            <div className="w-[259px] lg:w-[290px] hidden md:block bg-red-500 md:mb-5 mt-2">
              <SortFilter />
            </div>
            {/* Filter options for mobile */}
            {showFilter && (
              <div
                className="overlay block md:hidden fixed top-0 left-0 z-40 h-full w-full bg-gray-500/75 filter"
                onClick={handleShowFilter}
              >
                <div className="fixed w-full h-[80%] bottom-0 overflow-y-scroll filter">
                  <div className="p-4 border-b flex justify-between items-center bg-white">
                    <p className="text-xl font-bold ">Filter</p>
                    <button>Reset Filter</button>
                  </div>
                  <CategoriesFilter />
                  <PublishersFilter />
                  <WritersFilter />
                </div>
              </div>
            )}
            {/* Filter options for desktop */}
            <div className="w-[259px] lg:w-[290px] hidden md:block bg-red-500 md:mb-5 border">
              <div className="p-4 border-b flex justify-between items-center bg-white">
                <p className="text-xl font-bold ">Filter</p>
                <button>Reset Filter</button>
              </div>
              <CategoriesFilter />
              <PublishersFilter />
              <WritersFilter />
            </div>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-start">
            <BookCard margin="m-2" />
            <BookCard margin="m-2" />
            <BookCard margin="m-2" />
            <BookCard margin="m-2" />
            <BookCard margin="m-2" />
            <BookCard margin="m-2" />
            <BookCard margin="m-2" />
            <BookCard margin="m-2" />
            <BookCard margin="m-2" />
            <BookCard margin="m-2" />
            <BookCard margin="m-2" />
            <BookCard margin="m-2" />
            <BookCard margin="m-2" />
            <BookCard margin="m-2" />
            <BookCard margin="m-2" />
            <BookCard margin="m-2" />
            <BookCard margin="m-2" />
            <BookCard margin="m-2" />
            <BookCard margin="m-2" />
            <BookCard margin="m-2" />
            <BookCard margin="m-2" />
            <BookCard margin="m-2" />
            <BookCard margin="m-2" />
            <BookCard margin="m-2" />
            <BookCard margin="m-2" />
            <BookCard margin="m-2" />
            <BookCard margin="m-2" />
            <BookCard margin="m-2" />
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center">
          <button className="py-2 px-4 border m-2 hover:bg-primary hover:text-white">
            1
          </button>
          <button className="py-2 px-4 border m-2 hover:bg-primary hover:text-white">
            2
          </button>
          <button className="py-2 px-4 border m-2 hover:bg-primary hover:text-white">
            3
          </button>
          <button className="py-2 px-4 border m-2 hover:bg-primary hover:text-white">
            4
          </button>
          <button className="py-2 px-4 border m-2 hover:bg-primary hover:text-white">
            5
          </button>
        </div>
      </div>
    </section>
  );
}
