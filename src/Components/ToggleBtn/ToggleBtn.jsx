import React from "react";

export default function ToggleBtn({ show, setShow, name }) {
  return (
    <span
      onClick={() => setShow(!show)}
      className={`${
        show ? "bg-green-400" : "bg-yellow-400"
      } text-sm py-1 px-2 rounded-sm cursor-pointer`}
    >
      {name}
    </span>
  );
}
