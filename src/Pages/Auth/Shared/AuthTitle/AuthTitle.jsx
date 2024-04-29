import React from "react";

export default function AuthTitle({ title, subTitle }) {
  return (
    <h3 className="text-4xl font-medium text-slate-600">
      <span className="text-[#f0141E]">{title}</span> {subTitle}
    </h3>
  );
}
