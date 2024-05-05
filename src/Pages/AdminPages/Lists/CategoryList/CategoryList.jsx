import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";
import useCategories from "../../../../hooks/useCategories";
import { useAxiosPublic } from "../../../../hooks/useAxiosPublic";

export default function CategoryList() {
  const axiosPublic = useAxiosPublic();
  const [allCategories, isLoading, refetch] = useCategories();

  const handleDelCategory = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/deletecategory/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount === 1) {
            Swal.fire({
              title: "ডিলিট",
              text: "ক্যাটেগরি ডিলিট করা হয়েছে",
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
        <h3 className="text-2xl font-bold">All Importer Country</h3>
        <p>See Importer Country</p>
      </div>

      {isLoading ? (
        <>
          <p className="text-center">Loading Categories ...</p>
        </>
      ) : (
        <>
          <div className="flex justify-center mt-5">
            {allCategories.length > 0 ? (
              <>
                <table className="border">
                  <thead className="border-b">
                    <tr>
                      <th className="border border-black p-2">Serial</th>
                      <th className="border border-black p-2">Category Name</th>
                      <th className="border border-black p-2">Edit Category</th>
                      <th className="border border-black p-2">
                        Delete Category
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {allCategories.map((category, index) => (
                      <tr key={category._id}>
                        <td className="border border-black p-2">{index + 1}</td>
                        <td className="border border-black p-2">
                          {category.name[0]} <br /> {category.name[1]} <br />{" "}
                          {category.name[2]}
                        </td>

                        <td className="border border-black p-1">
                          <Link
                            to={`/admin/editcategory/${category.categoryId}`}
                            className="w-full flex justify-center"
                          >
                            <FaPencilAlt className="text-2xl" />
                          </Link>
                        </td>
                        <td className="border border-black p-1">
                          <button
                            className="w-full flex justify-center"
                            onClick={() => handleDelCategory(category._id)}
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
                <p className="text-lg font-bold">No Category Found</p>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
