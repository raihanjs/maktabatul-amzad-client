import useBooks from "../../../hooks/useBooks";
import BooksFilter from "../BooksFilter/BooksFilter";
import BookCard from "../../Shared/BookCard/BookCard";
import PageTitle from "../../../Components/PageTitle/PageTitle";

export default function AllBooks() {
  const [books, isLoading] = useBooks();
  return (
    <section className="container">
      <PageTitle title={["সকল বই", "All Books", "جميع الكتب"]} />

      {/* Filter area */}
      <BooksFilter />
      {/* Books Container */}
      <div className="flex flex-wrap justify-center">
        {isLoading ? (
          <>.............</>
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
