import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useAxiosPublic } from "../../../../hooks/useAxiosPublic";
import useEditors from "../../../../hooks/useEditors";
import { FaPencilAlt } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";

export default function EditorList() {
  const axiosPublic = useAxiosPublic();

  const [editors, isLoading, refetch] = useEditors();

  const handleDelete = (id) => {
    Swal.fire({
      title: "আপনি কি এই এডিটরকে ডিলিট করতে চাচ্ছেন?",
      text: "একবার ডিলিট করলে এই ডাটা আর ফেরত পাওয়া যাবে না",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "হ্যা, ডিলিট করুন!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/deleteeditor/${id}`).then((res) => {
          if (res.data.deletedCount === 1) {
            Swal.fire({
              title: "ডিলিট",
              text: "এডিটরকে ডিলিট করা হয়েছে",
              icon: "success",
            });
            refetch();
          } else {
            Swal.fire({
              title: "ডিলিট",
              text: "এডিটরকে ডিলিট করা যায় নি",
              icon: "error",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="text-center p-5 border-b-2">
        <h3 className="text-2xl font-bold">All Editors</h3>
        <p>See All Editors</p>
      </div>

      <div className="flex justify-center mt-5">
        {editors.length > 0 ? (
          <>
            <table>
              <thead>
                <tr>
                  <th className="p-2 border border-black">SL</th>
                  <th className="p-2 border border-black">Editor's Name</th>
                  <th className="p-2 border border-black">Edit Editor</th>
                  <th className="p-2 border border-black">Delete Editor</th>
                </tr>
              </thead>

              <tbody>
                {editors.map((editor, index) => (
                  <tr key={editor._id}>
                    <td className="border border-black p-1">{index + 1}</td>
                    <td className="border border-black p-1">
                      <p>{editor.name[0]}</p>
                      <p>{editor.name[1]}</p>
                      <p>{editor.name[2]}</p>
                    </td>
                    <td className="border border-black p-1">
                      <Link
                        to={`/admin/editeditor/${editor.editorId}`}
                        className="w-full flex justify-center"
                      >
                        <FaPencilAlt className="text-2xl" />
                      </Link>
                    </td>
                    <td className="border border-black p-1">
                      <button
                        className="w-full flex justify-center"
                        onClick={() => handleDelete(editor._id)}
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
            <p className="text-lg font-bold">Editors Loading ...</p>
          </>
        )}
      </div>
    </div>
  );
}
