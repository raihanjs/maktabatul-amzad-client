import useBooks from "../../../hooks/useBooks";
import BooksFilter from "../BooksFilter/BooksFilter";
import BookCard from "../../Shared/BookCard/BookCard";
import PageTitle from "../../../Components/PageTitle/PageTitle";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAxiosPublic } from "../../../hooks/useAxiosPublic";
import { useAxiosLocal } from "../../../hooks/useAxiosLocal";

export default function AllBooks() {
  const axiosPublic = useAxiosPublic();
  const axisLocal = useAxiosLocal();

  const location = useLocation();
  const searchQuery = location?.state?.search || false;

  const [allBooks] = useBooks();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [itemsPerpage, setItemsPerpage] = useState(10);
  const [numberofPages, setNumberofPages] = useState(null);
  useEffect(() => {
    setNumberofPages(Math.ceil(allBooks.length / itemsPerpage));
  }, [books, itemsPerpage]);
  const pages = [...Array(numberofPages).keys()];

  const [currentPage, setCurrentPage] = useState(0);

  const query = searchQuery
    ? `/books?title=${searchQuery}`
    : `/books?page=${currentPage}&size=${itemsPerpage}`;
  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await axisLocal.get(query);
        setBooks(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [searchQuery, itemsPerpage, currentPage]);

  return (
    <section className="container">
      <PageTitle title={["সকল বই", "All Books", "جميع الكتب"]} />

      {/* Filter area */}
      <BooksFilter
        itemsPerpage={itemsPerpage}
        setItemsPerpage={setItemsPerpage}
      />
      {/* Books Container */}
      <div className="flex flex-wrap justify-center">
        {loading ? (
          <>
            <div className="min-h-96 flex items-center justify-center">
              <p>Loading Books ...</p>
            </div>
          </>
        ) : (
          <>
            {books.map((book) => (
              <BookCard key={book._id} book={book} />
            ))}
          </>
        )}
      </div>

      {/* Pagination */}
      {pages.length > 1 && (
        <div className="flex justify-center items-center my-10">
          {pages.map((page) => (
            <button
              onClick={() => setCurrentPage(page)}
              className={`py-1 px-3 mx-2 border transition-all hover:border-primary hover:bg-primary hover:text-white ${
                currentPage === page && "pagination-active"
              }`}
              key={page}
            >
              {page + 1}
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
