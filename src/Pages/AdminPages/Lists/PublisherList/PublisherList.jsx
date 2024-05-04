import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useAxiosPublic } from "../../../../hooks/useAxiosPublic";
import usePublishers from "../../../../hooks/usePublishers";
import { FaPencilAlt } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";

export default function PublisherList() {
  const axiosPublic = useAxiosPublic();
  const [allPublishers, isLoading, refetch] = usePublishers();

  const handleDelete = (id) => {
    Swal.fire({
      title: "আপনি কি এই পাবলিশারকে ডিলিট করতে চাচ্ছেন?",
      text: "একবার ডিলিট করলে এই ডাটা আর ফেরত পাওয়া যাবে না",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "হ্যা, ডিলিট করুন!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/deletepublisher/${id}`).then((res) => {
          if (res.data.deletedCount === 1) {
            Swal.fire({
              title: "ডিলিট",
              text: "পাবলিশারকে ডিলিট করা হয়েছে",
              icon: "success",
            });
            refetch();
          } else {
            Swal.fire({
              title: "ডিলিট",
              text: "পাবলিশারকে ডিলিট করা যায় নি",
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
        <h3 className="text-2xl font-bold">All Publishers</h3>
        <p>See All Publishers</p>
      </div>

      {isLoading ? (
        <>
          {" "}
          <p className="text-center">Loading Publishers ...</p>
        </>
      ) : (
        <>
          <div className="flex justify-center mt-5">
            {allPublishers.length > 0 ? (
              <>
                <table className="border border-black p-2">
                  <thead className="border-b">
                    <tr>
                      <th className="border border-black p-2">Serial</th>
                      <th className="border border-black p-2">
                        Publisher Name
                      </th>
                      <th className="border border-black p-2">
                        Edit Publisher
                      </th>
                      <th className="border border-black p-2">
                        Delete Publisher
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {allPublishers.map((publisher, index) => (
                      <tr key={publisher._id}>
                        <td className="border border-black p-2">{index + 1}</td>
                        <td className="border border-black p-2">
                          {publisher.name[0]} <br /> {publisher.name[1]} <br />{" "}
                          {publisher.name[2]}
                        </td>

                        <td className="border border-black p-1">
                          <Link
                            to={`/admin/editpublisher/${publisher.publisherId}`}
                            className="w-full flex justify-center"
                          >
                            <FaPencilAlt className="text-2xl" />
                          </Link>
                        </td>
                        <td className="border border-black p-1">
                          <button
                            className="w-full flex justify-center"
                            onClick={() => handleDelete(publisher._id)}
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
                <p className="text-lg font-bold">No Publishers Found</p>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
