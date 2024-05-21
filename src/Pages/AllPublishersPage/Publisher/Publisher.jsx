import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { FaBook } from "react-icons/fa6";
import { ImBooks } from "react-icons/im";
import useBooks from "../../../hooks/useBooks";
import { ThemeContext } from "../../../Providers/ThemeProvider";

export default function Publisher({ publisher }) {
  const { name, image, publisherId } = publisher;
  const { language } = useContext(ThemeContext);
  // Load this Publisher books
  const [books] = useBooks();
  const publisherBooks = books.filter((book) => book.publisher === publisherId);
  return (
    <div className=" p-5 border hover:border-primary overflow-hidden w-[150px] md:w-[200px] m-2">
      <Link to={`${publisherId}`}>
        <div className="border-b border-red flex flex-col items-center">
          <div className="w-[80px] md:w-[100px] h-[80px] md:h-[100px] rounded-full overflow-hidden">
            {image ? (
              <img src={image} className="mx-auto" alt="" />
            ) : (
              <ImBooks className="text-[80px] md:text-[100px]" />
            )}
          </div>
          <p className="truncate w-full text-lg font-semibold mt-2 md:mt-5 text-primary text-center">
            {name[language]}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="flex items-center text-xl">
            <FaBook className="mr-2 text-red" />
            {publisherBooks.length > 1 ? "Books:" : "Book:"}{" "}
            {publisherBooks.length}
          </p>
        </div>
      </Link>
    </div>
  );
}
