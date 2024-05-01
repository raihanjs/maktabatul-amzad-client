import React, { useContext } from "react";
import { ThemeContext } from "../../../Providers/ThemeProvider";
import useBooks from "../../../hooks/useBooks";

export default function SingleSubCategory({ subCat, handleGetSubBooks }) {
  const { language } = useContext(ThemeContext);
  const [books] = useBooks();
  const thisSubCatBooks = books.filter(
    (book) => book.subCategory === subCat.subCategoryId
  );

  return (
    <button
      key={subCat?._id}
      onClick={() => handleGetSubBooks(thisSubCatBooks)}
      className="bg-primary py-2 px-6 m-2 rounded-sm text-white capitalize border border-primary hover:bg-transparent hover:text-primary"
    >
      {subCat?.name[language]} ({thisSubCatBooks.length})
    </button>
  );
}
