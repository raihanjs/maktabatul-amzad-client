import React from "react";

export default function PrimaryBtn({ text }) {
  return (
    <button className="bg-[#108D41] py-2 px-12 rounded-sm text-white capitalize">
      {text}
    </button>
  );
}
