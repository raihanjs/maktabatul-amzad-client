import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export default function Input({ type, placeholder, name }) {
  const [showPass, setShowPass] = useState(false);

  //   If type is submit then
  if (type === "submit") {
    return (
      <input
        type={type}
        value={name}
        className="w-[300px] md:w-[320px] py-2 rounded-sm bg-gray-600 text-white cursor-pointer hover:bg-gray-900"
      />
    );
  }
  //   If type is password then
  else if (type == "password") {
    return (
      <div className="relative w-[300px] md:w-[320px] h-10 border rounded-sm">
        <input
          name={name}
          type={`${showPass ? "text" : "password"}`}
          placeholder={placeholder}
          minLength="6"
          required
          className="absolute w-full h-full pl-3 focus-within:outline-[#F0141E]"
        />
        <>
          {showPass ? (
            <FaRegEye
              className="absolute top-2/4 -translate-y-2/4 right-3 text-xl cursor-pointer"
              onClick={() => setShowPass(!showPass)}
            />
          ) : (
            <FaRegEyeSlash
              className="absolute top-2/4 -translate-y-2/4 right-3 text-xl cursor-pointer"
              onClick={() => setShowPass(!showPass)}
            />
          )}
        </>
      </div>
    );
  }
  //   If type is not password either submit then
  else {
    return (
      <div className="relative w-[300px] md:w-[320px] h-10 border rounded-sm">
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          required
          className="absolute w-full h-full pl-3 focus-within:outline-[#F0141E]"
        />
      </div>
    );
  }
}
