import React from "react";
import { Link } from "react-router-dom";

export default function HeaderMenu() {
  return (
    <ul className="flex items-center space-x-2 md:space-x-4 text-white font-medium">
      <li>
        <Link to="" className="text-md lg:text-lg">
          Home
        </Link>
      </li>
      <li>
        <Link to="books" className="text-md lg:text-lg">
          Books
        </Link>
      </li>
      <li>
        <Link to="writers" className="text-md lg:text-lg">
          Writers
        </Link>
      </li>
      <li>
        <Link to="categories" className="text-md lg:text-lg">
          Category
        </Link>
      </li>
      <li>
        <Link to="about" className="text-md lg:text-lg">
          About
        </Link>
      </li>
    </ul>
  );
}
