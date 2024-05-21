import { Link } from "react-router-dom";
// import {} from "./writer.css";
import { useContext, useEffect, useState } from "react";
import { FaBook } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import useBooks from "../../../hooks/useBooks";
import { ThemeContext } from "../../../Providers/ThemeProvider";

export default function Writer({ writer }) {
  const { name, image, writerId } = writer;
  const { language } = useContext(ThemeContext);
  // Load this writer books
  const [books] = useBooks();
  const writerBooks = books.filter((book) => book.writer.includes(writerId));
  return (
    <div className="p-2 md:p-5 border hover:border-primary overflow-hidden w-[180px] md:w-[250px] m-2">
      <Link to={`${writerId}`}>
        <div className="border-b border-red flex flex-col items-center">
          <div className="w-[80px] md:w-[100px] h-[80px] md:h-[100px] rounded-full overflow-hidden">
            {image ? (
              <img src={image} className="mx-auto" alt="" />
            ) : (
              <FaRegUserCircle className="text-[80px] md:text-[100px]" />
            )}
          </div>
          <p className="truncate w-full text-lg font-semibold mt-2 md:mt-5 text-primary text-center">
            {name[language]}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="flex items-center text-xl">
            <FaBook className="mr-2 text-red" />
            {writerBooks.length > 1 ? "Books:" : "Book:"} {writerBooks.length}
          </p>
        </div>
      </Link>
    </div>
  );
}
