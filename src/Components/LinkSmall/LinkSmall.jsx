import React from "react";
import { Link } from "react-router-dom";

export default function LinkSmall({ text, link }) {
  return (
    <Link
      to={link}
      className="text-xs text-[#F0141E]/75 border-[#F0141E]/75 border-dotted border-b hover:border-[#F0141E] hover:text-[#F0141E]"
    >
      &nbsp; {text}
    </Link>
  );
}
