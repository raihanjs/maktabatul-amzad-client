import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useAxiosPublic } from "../../../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

export default function AddBanner() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(
      "https://api.imgbb.com/1/upload?key=e1f8cb2a3ec0064d89280dcbe819c1b7",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((imgRes) => {
        if (imgRes.success) {
          const bannerData = {
            thumb: imgRes.data.display_url,
            title: [data.bannerTitleBn, data.bannerTitleEn, data.bannerTitleAr],
            text: [data.bannerTextBn, data.bannerTextEn, data.bannerTextAr],
            isActive: true,
          };

          axiosPublic.post("/addbanner", bannerData).then((res) => {
            if (res.data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Banner added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/admin/booklist");
            } else {
              Swal.fire({
                icon: "error",
                title: "ব্যানার যুক্ত করা সম্ভব হয়নি",
              });
            }
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "ছবি অবশ্যই দিতে হবে",
          });
        }
      });
  };
  return (
    <div>
      <div className="text-center p-5 border border-black-b-2">
        <h3 className="text-2xl font-bold">Add Banner</h3>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="m-2">
        <div className="grid grid-cols-5 gap-5">
          <div className="col-span-3">
            {/* Title */}
            <div>
              <p className="text-xl font-bold mb-3">ব্যানার টাইটেল</p>
              <div className="flex flex-col">
                <label>ব্যানার টাইটেল বাংলায়</label>
                <input
                  type="text"
                  {...register("bannerTitleBn")}
                  className="p-1 border border-black rounded-sm mb-2"
                />
              </div>
              <div className="flex flex-col">
                <label>ব্যানার টাইটেল ইংরেজিতে</label>
                <input
                  type="text"
                  {...register("bannerTitleEn")}
                  className="p-1 border border-black rounded-sm mb-2"
                />
              </div>
              <div className="flex flex-col">
                <label>ব্যানার টাইটেল আরবীতে</label>
                <input
                  type="text"
                  {...register("bannerTitleAr", { required: true })}
                  className="p-1 border border-black rounded-sm mb-2"
                />
                {errors.bannerTitleAr && (
                  <span className="text-red text-sm ">
                    এই ঘরটি অবশ্যই পুরন করতে হবে
                  </span>
                )}
              </div>
            </div>
            {/* Text */}
            <div className="mt-5">
              <p className="text-xl font-bold mb-3">ব্যানার টেক্সট</p>
              <div className="flex flex-col">
                <label>ব্যানার টেক্সট বাংলায়</label>
                <input
                  type="text"
                  {...register("bannerTextBn")}
                  className="p-1 border border-black rounded-sm mb-2"
                />
              </div>
              <div className="flex flex-col">
                <label>ব্যানার টেক্সট ইংরেজিতে</label>
                <input
                  type="text"
                  {...register("bannerTextEn")}
                  className="p-1 border border-black rounded-sm mb-2"
                />
              </div>
              <div className="flex flex-col">
                <label>ব্যানার টেক্সট আরবীতে</label>
                <input
                  type="text"
                  {...register("bannerTextAr", { required: true })}
                  className="p-1 border border-black rounded-sm mb-2"
                />
                {errors.bannerTitleAr && (
                  <span className="text-red text-sm ">
                    এই ঘরটি অবশ্যই পুরন করতে হবে
                  </span>
                )}
              </div>
            </div>
          </div>
          {/* Image */}
          <div className="col-span-2 border border-black overflow-hidden">
            <input
              type="file"
              src=""
              {...register("image")}
              className="mt-12 ml-12"
              alt=""
            />
          </div>
        </div>

        <input
          type="submit"
          value="Add Banner"
          className="py-2 px-8 bg-[#108D41] text-white mt-3"
        />
      </form>
    </div>
  );
}
