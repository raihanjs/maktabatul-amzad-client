import useBooks from "../../../hooks/useBooks";
import BooksFilter from "../BooksFilter/BooksFilter";
import BookCard from "../../Shared/BookCard/BookCard";
import PageTitle from "../../../Components/PageTitle/PageTitle";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAxiosPublic } from "../../../hooks/useAxiosPublic";

export default function AllBooks() {
  const axiosPublic = useAxiosPublic();

  const location = useLocation();
  const searchQuery = location?.state?.search || false;

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const query = searchQuery ? `/books?title=${searchQuery}` : "/books";

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await axiosPublic.get(query);
        setBooks(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [searchQuery]);

  return (
    <section className="container">
      <PageTitle title={["সকল বই", "All Books", "جميع الكتب"]} />

      {/* Filter area */}
      <BooksFilter />
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
      <div className="flex justify-center items-center my-10">
        <button className="py-1 px-3 mx-2 border transition-all hover:border-primary hover:bg-primary hover:text-white">
          Prev
        </button>
        <button className="py-1 px-3 mx-2 border transition-all hover:border-primary hover:bg-primary hover:text-white">
          1
        </button>
        <button className="py-1 px-3 mx-2 border transition-all hover:border-primary hover:bg-primary hover:text-white">
          2
        </button>
        <button className="py-1 px-3 mx-2 border transition-all hover:border-primary hover:bg-primary hover:text-white">
          3
        </button>
        <button className="py-1 px-3 mx-2 border transition-all hover:border-primary hover:bg-primary hover:text-white">
          Next
        </button>
      </div>
    </section>
  );
}
