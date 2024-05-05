import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { useAxiosPublic } from "../../../../hooks/useAxiosPublic";
import useSubCategories from "../../../../hooks/useSubCategories";

export default function SubCategoryList() {
  const axiosPublic = useAxiosPublic();
  const [allSubCategories, isLoading, refetch] = useSubCategories();
  const handleDelSubCatgeory = (id) => {
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
        axiosPublic.delete(`/deletesubcategory/${id}`).then((res) => {
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
        <h3 className="text-2xl font-bold">All Sub Categories</h3>
        <p>All Sub Categories</p>
      </div>

      {isLoading ? (
        <>
          <p className="text-center">Loading Sub Categories ...</p>
        </>
      ) : (
        <>
          <div className="flex justify-center mt-5 mx-2">
            {allSubCategories.length > 0 ? (
              <>
                <table className="border">
                  <thead className="border-b">
                    <tr>
                      <th className="border border-black p-2">SL</th>
                      <th className="border border-black p-2">
                        Sub Category Name
                      </th>
                      <th className="border border-black p-2">
                        Main Category Name
                      </th>
                      <th className="border border-black p-2">
                        Edit Sub Category
                      </th>
                      <th className="border border-black p-2">
                        Delete Sub Category
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {allSubCategories.map((subCategory, index) => (
                      <tr key={subCategory._id}>
                        <td className="border border-black p-2">{index + 1}</td>
                        <td className="border border-black p-2">
                          {subCategory.name[0]} <br /> {subCategory.name[1]}{" "}
                          <br /> {subCategory.name[2]}
                        </td>
                        <td className="border border-black p-2">
                          <p>{subCategory?.mainCategoryDetails[0]?.name[0]}</p>
                          <p>{subCategory?.mainCategoryDetails[0]?.name[1]}</p>
                          <p>{subCategory?.mainCategoryDetails[0]?.name[2]}</p>
                        </td>
                        <td className="border border-black p-1">
                          <Link
                            to={`/admin/editsubcategory/${subCategory.subCategoryId}`}
                            className="w-full flex justify-center"
                          >
                            <FaPencilAlt className="text-2xl" />
                          </Link>
                        </td>
                        <td className="border border-black p-1">
                          <button
                            className="w-full flex justify-center"
                            onClick={() =>
                              handleDelSubCatgeory(subCategory._id)
                            }
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
                <p className="text-lg font-bold">No Sub Category Found</p>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
