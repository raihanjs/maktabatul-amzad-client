import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import { useAxiosPublic } from "../../../../hooks/useAxiosPublic";
import useTranslators from "../../../../hooks/useTranslators";

import { FaPencilAlt } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";

export default function TranslatorList() {
  const axiosPublic = useAxiosPublic();

  const [translators, isLoading, refetch] = useTranslators();

  const handleDelete = (id) => {
    Swal.fire({
      title: "আপনি কি এই ট্রান্সলেটরকে ডিলিট করতে চাচ্ছেন?",
      text: "একবার ডিলিট করলে এই ডাটা আর ফেরত পাওয়া যাবে না",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "হ্যা, ডিলিট করুন!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/deletetranslator/${id}`).then((res) => {
          if (res.data.deletedCount === 1) {
            Swal.fire({
              title: "ডিলিট",
              text: "ট্রান্সলেটরকে ডিলিট করা হয়েছে",
              icon: "success",
            });
            refetch();
          } else {
            Swal.fire({
              title: "ডিলিট",
              text: "ট্রান্সলেটরকে ডিলিট করা যায় নি",
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
        <h3 className="text-2xl font-bold">All Translators</h3>
        <p>See All Translators</p>
      </div>

      {isLoading ? (
        <>
          <p className="text-center">Loading Translators ...</p>
        </>
      ) : (
        <>
          <div className="flex justify-center mt-5">
            {translators.length > 0 ? (
              <>
                <table className="border border-black p-2">
                  <thead className="border border-black p-2-b">
                    <tr>
                      <th className="border border-black p-2">SL</th>
                      <th className="border border-black p-2">
                        Translator's Name
                      </th>
                      <th className="border border-black p-2">
                        Edit Translator
                      </th>
                      <th className="border border-black p-2">
                        Delete Translator
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {translators.map((translator, index) => (
                      <tr key={translator._id}>
                        <td className="border border-black p-2">{index + 1}</td>
                        <td className="border border-black p-2">
                          <p>{translator.name[0]}</p>
                          <p>{translator.name[1]}</p>
                          <p>{translator.name[2]}</p>
                        </td>

                        <td className="border border-black p-1">
                          <Link
                            to={`/admin/edittranslator/${translator.translatorId}`}
                            className="w-full flex justify-center"
                          >
                            <FaPencilAlt className="text-2xl" />
                          </Link>
                        </td>
                        <td className="border border-black p-1">
                          <button
                            className="w-full flex justify-center"
                            onClick={() => handleDelete(translator._id)}
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
                <p className="text-lg font-bold">No Translators Found</p>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
