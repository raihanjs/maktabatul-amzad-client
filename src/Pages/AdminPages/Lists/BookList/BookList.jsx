import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { useContext, useEffect, useState } from "react";
import useBooksLength from "../../../../hooks/useBooksLength";
import { useAxiosPublic } from "../../../../hooks/useAxiosPublic";
import { ThemeContext } from "../../../../Providers/ThemeProvider";

export default function BookList() {
  const { language } = useContext(ThemeContext);
  const axiosPubic = useAxiosPublic();
  const [books, setBooks] = useState([]);

  const [totalBooks] = useBooksLength();
  const [itemsPerpage, setItemsPerpage] = useState(10);
  const [numberofPages, setNumberofPages] = useState(null);
  const pages = [...Array(numberofPages).keys()];
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setNumberofPages(Math.ceil(totalBooks / itemsPerpage));
  }, [books, itemsPerpage]);

  const query = `/books?page=${currentPage}&size=${itemsPerpage}`;
  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await axiosPubic.get(query);
        setBooks(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [itemsPerpage, currentPage]);

  const handleDelBook = (id) => {
    Swal.fire({
      title: "আপনি কি এই বইটি ডিলিট করতে চাচ্ছেন?",
      text: "একবার ডিলিট করলে এই ডাটা আর ফেরত পাওয়া যাবে না",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "হ্যা, ডিলিট করুন!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPubic.delete(`/deletebook/${id}`).then((res) => {
          if (res.data.deletedCount === 1) {
            Swal.fire({
              title: "ডিলিট",
              text: " ডিলিট করা হয়েছে",
              icon: "success",
            });
            const remainingBooks = books.filter((book) => book._id !== id);
            setBooks(remainingBooks);
          }
        });
      } else {
        Swal.fire({
          title: "ডিলিট",
          text: " ডিলিট করা যায় নি",
          icon: "error",
        });
      }
    });
  };
  return (
    <div>
      <div className="text-center p-5 border-b-2">
        <h3 className="text-2xl font-bold">All Books</h3>
        <p>See All Books</p>
      </div>

      {loading ? (
        <>
          <p>Loading Books ...</p>
        </>
      ) : (
        <>
          {/* Allbooks Table */}
          {books.length > 0 ? (
            <>
              <div className="flex justify-center mt-5 mx-5">
                <table>
                  <thead>
                    <tr>
                      <th className="p-2 border border-black">Sl</th>
                      <th className="p-2 border border-black">Image</th>
                      <th className="p-2 border border-black">
                        Category & Sub
                      </th>
                      <th className="p-2 border border-black">Authors</th>
                      <th className="p-2 border border-black">
                        Publisher & Importer
                      </th>
                      <th className="p-2 border border-black">Others</th>
                      <th className="p-2 border border-black">Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {books.map((book, index) => (
                      <tr key={book._id}>
                        <td className="border border-black p-1 text-center">
                          {index + 1}
                        </td>
                        <td className="border border-black p-1">
                          <img src={book.thumb} className="h-20" alt="" />
                          <p className="w-24 xl:w-44 truncate">
                            {book.title[language]}
                          </p>
                        </td>
                        <td className="border border-black p-1">
                          {book?.categoryDetails?.map((ct) => (
                            <div key={ct._id}>
                              <p className="w-40  xl:w-60 truncate">
                                Category: {ct.name[language]}
                              </p>
                            </div>
                          ))}
                          {book?.subCategoryDetails?.map((sct) => (
                            <div key={sct._id}>
                              <p className="w-40 xl:w-60 truncate">
                                Sub: {sct.name[language]}
                              </p>
                            </div>
                          ))}
                        </td>
                        <td className="border border-black p-1">
                          {book?.writerDetails?.map((wr) => (
                            <div key={wr._id}>
                              <p className="w-40 xl:w-60 truncate">
                                Writer: {wr.name[0]}
                              </p>
                            </div>
                          ))}
                          {book?.translatorDetails?.map((tr) => (
                            <div key={tr._id}>
                              <p className="w-40 xl:w-60 truncate">
                                Translator: {tr.name[language]}
                              </p>
                            </div>
                          ))}
                          {book?.editorDetails?.map((ed) => (
                            <div key={ed._id}>
                              <p className="w-40 xl:w-60 truncate">
                                Editor: {ed.name[language]}
                              </p>
                            </div>
                          ))}
                        </td>
                        <td className="border border-black p-1">
                          {book?.publisherDetails?.map((pb) => (
                            <div key={pb._id}>
                              <p className="w-40 xl:w-60 truncate">
                                Publisher: {pb.name[language]}
                              </p>
                            </div>
                          ))}

                          {book?.importedCountryDetails?.map((impc) => (
                            <div key={impc._id}>
                              <p className="w-40 xl:w-60 truncate">
                                From: {impc.name[language]}
                              </p>
                            </div>
                          ))}
                        </td>
                        <td className="border border-black p-1">
                          <p>Price: {book.price}</p>
                          <p>Pages: {book.pages}</p>
                          <p>Stock: {book.stock}</p>
                          <p>Sold: {book.sold}</p>
                        </td>

                        <td className="border border-black p-1">
                          <div>
                            <Link to={`/admin/editbook/${book._id}`}>
                              <FaPencilAlt className="mx-auto m-2 text-xl" />
                            </Link>
                          </div>
                          <button onClick={() => handleDelBook(book._id)}>
                            <RiDeleteBin2Fill className="ml-5 m-2 text-xl" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <>
              <p className="text-2xl font-bold text-center">No books found</p>
            </>
          )}
        </>
      )}

      {/* Pagination */}
      {books.length > 1 && (
        <>
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
        </>
      )}
    </div>
  );
}
