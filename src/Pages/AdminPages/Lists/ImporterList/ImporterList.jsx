import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { useAxiosPublic } from "../../../../hooks/useAxiosPublic";
import useImportedCountries from "../../../../hooks/useImportedCountries";

export default function ImporterList() {
  const axiosPublic = useAxiosPublic();
  const [importedCountry, isLoading, refetch] = useImportedCountries();

  const handleDelete = (id) => {
    Swal.fire({
      title: "আপনি কি এই দেশকে ডিলিট করতে চাচ্ছেন?",
      text: "একবার ডিলিট করলে এই ডাটা আর ফেরত পাওয়া যাবে না",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "হ্যা, ডিলিট করুন!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/deleteimportedcountry/${id}`).then((res) => {
          if (res.data.deletedCount === 1) {
            Swal.fire({
              title: "ডিলিট",
              text: "দেশকে ডিলিট করা হয়েছে",
              icon: "success",
            });
            refetch();
          } else {
            Swal.fire({
              title: "ডিলিট",
              text: "দেশকে ডিলিট করা যায় নি",
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
        <h3 className="text-2xl font-bold">All Importer Country</h3>
        <p>See Importer Country</p>
      </div>

      {isLoading ? (
        <>
          <p className="text-center">Loading Importers ...</p>
        </>
      ) : (
        <>
          <div className="flex justify-center mt-5">
            {importedCountry.length > 0 ? (
              <>
                <table className="border">
                  <thead className="border-b">
                    <tr>
                      <th className="border border-black">SL</th>
                      <th className="border border-black">Country Name</th>
                      <th className="border border-black">Edit Country</th>
                      <th className="border border-black">Delete Country</th>
                    </tr>
                  </thead>

                  <tbody>
                    {importedCountry.map((country, index) => (
                      <tr key={country._id}>
                        <td className="border border-black p-2">{index + 1}</td>
                        <td className="border border-black p-2">
                          <p>{country.name[0]}</p>
                          <p>{country.name[1]}</p>
                          <p>{country.name[2]}</p>
                        </td>

                        <td className="border border-black p-1">
                          <Link
                            to={`/admin/editimporter/${country._id}`}
                            className="w-full flex justify-center"
                          >
                            <FaPencilAlt className="text-2xl" />
                          </Link>
                        </td>
                        <td className="border border-black p-1">
                          <button
                            className="w-full flex justify-center"
                            onClick={() => handleDelete(country._id)}
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
                <p className="text-lg font-bold">No Importer Found</p>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
