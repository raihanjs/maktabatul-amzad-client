import React from "react";
import useBanner from "../../../../hooks/useBanner";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAxiosPublic } from "../../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

export default function BannerList() {
  const axiosPublic = useAxiosPublic();
  const [banners, isLoading, refetch] = useBanner();

  const handleDelete = (id) => {
    Swal.fire({
      title: "আপনি কি এই ব্যানারটি ডিলিট করতে চাচ্ছেন?",
      text: "একবার ডিলিট করলে এই ডাটা আর ফেরত পাওয়া যাবে না",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "হ্যা, ডিলিট করুন!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/banners/${id}`).then((res) => {
          if (res.data.deletedCount === 1) {
            Swal.fire({
              title: "ডিলিট",
              text: "ব্যানারটি ডিলিট করা হয়েছে",
              icon: "success",
            });
            refetch();
          } else {
            Swal.fire({
              title: "ডিলিট",
              text: "ব্যানারটি ডিলিট করা যায় নি",
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
        <h3 className="text-2xl font-bold">All Banners</h3>
        <p>See All Banners</p>
      </div>

      {isLoading ? (
        <>
          <p className="text-center">Loading Banners ...</p>
        </>
      ) : (
        <div className="flex justify-center mt-5">
          {banners.length > 0 ? (
            <>
              <table>
                <thead>
                  <tr>
                    <th className="p-2 border border-black">SL</th>
                    <th className="p-2 border border-black">Banner Image</th>
                    <th className="p-2 border border-black">Banner Title</th>
                    <th className="p-2 border border-black">Banner Text</th>
                    <th className="p-2 border border-black">Status</th>
                    <th className="p-2 border border-black">Edit Banner</th>
                    <th className="p-2 border border-black">Delete Banner</th>
                  </tr>
                </thead>

                <tbody>
                  {banners.map((banner, index) => (
                    <tr key={banner._id}>
                      <td className="border border-black p-1">{index + 1}</td>
                      <td className="border border-black p-1">
                        <img src={banner?.thumb} className="h-20 p-2" alt="" />
                      </td>
                      <td className="border border-black p-1">
                        <h3 className="w-80 truncate">{banner?.title[0]}</h3>
                        <h3 className="w-80 truncate">{banner?.title[1]}</h3>
                        <h3 className="w-80 truncate">{banner?.title[2]}</h3>
                      </td>
                      <td className="border border-black p-1">
                        <p className="w-60 truncate">{banner?.text[0]}</p>
                        <p className="w-60 truncate">{banner?.text[1]}</p>
                        <p className="w-60 truncate">{banner?.text[2]}</p>
                      </td>
                      <td className="border border-black p-1">
                        <p>{banner?.isActive && "Active"}</p>
                      </td>

                      <td className="border border-black p-1">
                        <Link to="" className="w-full flex justify-center">
                          <FaPencilAlt className="text-2xl" />
                        </Link>
                      </td>

                      <td className="border border-black p-1">
                        <button
                          className="w-full flex justify-center"
                          onClick={() => handleDelete(banner._id)}
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
              <p className="text-lg font-bold">No Editors Found</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
