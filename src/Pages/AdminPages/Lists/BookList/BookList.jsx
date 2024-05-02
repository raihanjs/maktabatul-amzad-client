import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useAxiosPublic } from "../../../../hooks/useAxiosPublic";
import useBooks from "../../../../hooks/useBooks";

export default function BookList() {
  const axiosPubic = useAxiosPublic();
  const [books, refetch] = useBooks();
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
            refetch();
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

      {/* Allbooks Table */}
      <div className="flex justify-center mt-5 mx-5">
        <div className="overflow-x-auto">
          <div style={{ width: "max-content" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th className="p-2 border border-black">Sl</th>
                  <th className="p-2 border border-black">Image</th>
                  <th className="p-2 border border-black">Title</th>
                  <th className="p-2 border border-black">Category</th>
                  <th className="p-2 border border-black">Sub Category</th>
                  <th className="p-2 border border-black">Writer</th>
                  <th className="p-2 border border-black">Translator</th>
                  <th className="p-2 border border-black">Editor</th>
                  <th className="p-2 border border-black">Publisher</th>
                  <th className="p-2 border border-black">Imported</th>
                  <th className="p-2 border border-black">Price</th>
                  <th className="p-2 border border-black">Pages</th>
                  <th className="p-2 border border-black">Stock</th>
                  <th className="p-2 border border-black">Sold</th>
                  <th className="p-2 border border-black">Edit</th>
                  <th className="p-2 border border-black">Delete</th>
                </tr>
              </thead>

              <tbody>
                {books.map((book, index) => (
                  <tr key={book._id}>
                    <td className="border border-black p-1 text-center">
                      {index + 1}
                    </td>
                    <td className="border border-black p-1 text-center">
                      <img src={book.thumb} className="h-20" alt="" />
                    </td>
                    <td className="border border-black p-1 text-center">
                      <p>{book.title[0]},</p>
                      <p>{book.title[1]},</p>
                      <p>{book.title[2]}</p>
                    </td>
                    <td className="border border-black p-1 text-center">
                      {book?.categoryDetails?.map((ct) => (
                        <div key={ct._id}>
                          <p>{ct.name[0]}</p>
                          <p>{ct.name[1]}</p>
                          <p>{ct.name[2]}</p>
                        </div>
                      ))}
                    </td>
                    <td className="border border-black p-1 text-center">
                      {book?.subCategoryDetails?.map((sct) => (
                        <div key={sct._id}>
                          <p>{sct.name[0]}</p>
                          <p>{sct.name[1]}</p>
                          <p>{sct.name[2]}</p>
                        </div>
                      ))}
                    </td>
                    <td className="border border-black p-1 text-center">
                      {book?.writerDetails?.map((wr) => (
                        <div key={wr._id}>
                          <p>{wr.name[0]}</p>
                          <p>{wr.name[1]}</p>
                          <p>{wr.name[2]}</p>
                        </div>
                      ))}
                    </td>
                    <td className="border border-black p-1 text-center">
                      {book?.translatorDetails?.map((tr) => (
                        <div key={tr._id}>
                          <p>{tr.name[0]}</p>
                          <p>{tr.name[1]}</p>
                          <p>{tr.name[2]}</p>
                        </div>
                      ))}
                    </td>
                    <td className="border border-black p-1 text-center">
                      {book?.editorDetails?.map((ed) => (
                        <div key={ed._id}>
                          <p>{ed.name[0]}</p>
                          <p>{ed.name[1]}</p>
                          <p>{ed.name[2]}</p>
                        </div>
                      ))}
                    </td>
                    <td className="border border-black p-1 text-center">
                      {book?.publisherDetails?.map((pb) => (
                        <div key={pb._id}>
                          <p>{pb.name[0]}</p>
                          <p>{pb.name[1]}</p>
                          <p>{pb.name[2]}</p>
                        </div>
                      ))}
                    </td>
                    <td className="border border-black p-1 text-center">
                      {book?.importedCountryDetails?.map((impc) => (
                        <div key={impc._id}>
                          <p>{impc.name[0]}</p>
                          <p>{impc.name[1]}</p>
                          <p>{impc.name[2]}</p>
                        </div>
                      ))}
                    </td>
                    <td className="border border-black p-1 text-center">
                      {book.price}
                    </td>
                    <td className="border border-black p-1 text-center">
                      {book.pages}
                    </td>
                    <td className="border border-black p-1 text-center">
                      {book.stock}
                    </td>
                    <td className="border border-black p-1 text-center"></td>
                    <td className="border border-black p-1 text-center">
                      <Link to={`/admin/editbook/${book._id}`}>Edit</Link>
                    </td>
                    <td className="border border-black p-1 text-center">
                      <button onClick={() => handleDelBook(book._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
