import React from "react";
import { Link } from "react-router-dom";

export default function AuthHeader() {
  return (
    <header className="fixed top-0 left-0 w-full z-75 mt-5">
      <div className="container">
        <div className="flex justify-between items-center">
          <Link to="/">M</Link>
          <Link className="p-2 rounded-sm text-black hover:bg-gray-200">
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
