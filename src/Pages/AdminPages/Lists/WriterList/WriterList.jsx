import Swal from "sweetalert2";
import { useContext } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";
import useWriters from "../../../../hooks/useWriters";
import { ThemeContext } from "../../../../Providers/ThemeProvider";
import { useAxiosPublic } from "../../../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";

export default function WriterList() {
  const { language } = useContext(ThemeContext);
  const axiosPubic = useAxiosPublic();
  const [writers, isLoading, refetch] = useWriters();

  const handleDelWriter = (id) => {
    Swal.fire({
      title: "আপনি কি এই লেখক্কে ডিলিট করতে চাচ্ছেন?",
      text: "একবার ডিলিট করলে এই ডাটা আর ফেরত পাওয়া যাবে না",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "হ্যা, ডিলিট করুন!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPubic.delete(`/deletewriter/${id}`).then((res) => {
          console.log(res.data);
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
        <h3 className="text-2xl font-bold">All Writers</h3>
        <p>See All Books</p>
      </div>

      {/* Allbooks Table */}
      <div className="flex justify-center mt-5 mx-5 h-screen">
        {writers.length > 0 ? (
          <>
            <table>
              <thead>
                <tr>
                  <th className="p-2 border border-black">SL</th>
                  <th className="p-2 border border-black">Writer's Image</th>
                  <th className="p-2 border border-black">Writer's Name</th>
                  <th className="p-2 border border-black">Writer's About</th>
                  <th className="p-2 border border-black">Edit Writer</th>
                  <th className="p-2 border border-black">Delete Writer</th>
                </tr>
              </thead>

              <tbody>
                {writers.map((writer, index) => (
                  <tr key={writer._id}>
                    <td className="border border-black p-1">{index + 1}</td>
                    <td className="border border-black p-1">
                      {writer.image ? (
                        <>
                          <img
                            src={writer.image}
                            className="h-20 mx-auto"
                            alt=""
                          />
                        </>
                      ) : (
                        <>
                          <FaRegUserCircle className="text-6xl mx-auto" />
                        </>
                      )}
                    </td>
                    <td className="border border-black p-1">
                      <p>{writer.name[0]}</p>
                      <p>{writer.name[1]}</p>
                      <p>{writer.name[2]}</p>
                    </td>
                    <td className="border border-black p-1">
                      <p className="w-40 xl:w-96 truncate">{writer.desc[0]}</p>
                      <p className="w-40 xl:w-96 truncate">{writer.desc[1]}</p>
                      <p className="w-40 xl:w-96 truncate">{writer.desc[2]}</p>
                    </td>
                    <td className="border border-black p-1">
                      <Link
                        to={`/admin/editwriter/${writer.writerId}`}
                        className="w-full flex justify-center"
                      >
                        <FaPencilAlt className="text-2xl" />
                      </Link>
                    </td>
                    <td className="border border-black p-1">
                      <button
                        className="w-full flex justify-center"
                        onClick={() => handleDelWriter(writer._id)}
                      >
                        <RiDeleteBin2Fill className="text-2xl" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <>
            <p className="text-lg font-bold">Writers Loading ...</p>
          </>
        )}
      </div>
    </div>
  );
}
