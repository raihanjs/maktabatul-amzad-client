import React from "react";
import { Link } from "react-router-dom";

export default function LinkLarge({ text, link }) {
  return (
    <Link
      to={link}
      className="text-gray-400 border-dotted border-b hover:border-gray-700 hover:text-gray-700"
    >
      {text}
    </Link>
  );
}
