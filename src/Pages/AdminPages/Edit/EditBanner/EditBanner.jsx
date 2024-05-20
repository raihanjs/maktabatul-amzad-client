import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useAxiosPublic } from "../../../../hooks/useAxiosPublic";
import { useForm } from "react-hook-form";

export default function EditBanner() {
  const bannerDetails = useLoaderData();
  const [showBanner, setShowBanner] = useState(bannerDetails.isActive);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const updateData = {
      title: [data.bannerTitleBn, data.bannerTitleEn, data.bannerTitleAr],
      text: [data.bannerTextBn, data.bannerTextEn, data.bannerTextAr],
      isActive: showBanner,
    };

    if (data.image.length > 0) {
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
            const imageUrl = imgRes.data.display_url;
            updateData.thumb = imageUrl;
            // Edit Book
            axiosPublic
              .patch(`/banners/${bannerDetails._id}`, updateData)
              .then((res) => {
                if (res.data.acknowledged) {
                  navigate("/admin/bannerlist");
                }
              });
          }
        });
    } else {
      updateData.thumb = bannerDetails.thumb;
      axiosPublic
        .patch(`/banners/${bannerDetails._id}`, updateData)
        .then((res) => {
          if (res.data.acknowledged) {
            navigate("/admin/bannerlist");
          }
        });
    }
  };
  return (
    <div>
      <div className="text-center p-5 border border-black-b-2">
        <h3 className="text-2xl font-bold">Add Banner</h3>
      </div>

      <div className="m-2 flex items-center space-x-5">
        <div>
          <p>এই ব্যানারটি দেখাবে? </p>
        </div>
        <div className="flex space-x-3">
          <button
            className={`${
              showBanner ? "border-primary bg-primary" : "border-black"
            } border py-1 px-3`}
            onClick={() => setShowBanner(true)}
          >
            হ্যা
          </button>
          <button
            className={`${
              !showBanner ? "border-red bg-red" : "border-black"
            } && border py-1 px-3`}
            onClick={() => setShowBanner(false)}
          >
            না
          </button>
        </div>
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
                  defaultValue={bannerDetails.title[0]}
                  type="text"
                  {...register("bannerTitleBn")}
                  className="p-1 border border-black rounded-sm mb-2"
                />
              </div>
              <div className="flex flex-col">
                <label>ব্যানার টাইটেল ইংরেজিতে</label>
                <input
                  defaultValue={bannerDetails.title[1]}
                  type="text"
                  {...register("bannerTitleEn")}
                  className="p-1 border border-black rounded-sm mb-2"
                />
              </div>
              <div className="flex flex-col">
                <label>ব্যানার টাইটেল আরবীতে</label>
                <input
                  defaultValue={bannerDetails.title[2]}
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
                  defaultValue={bannerDetails.text[0]}
                  type="text"
                  {...register("bannerTextBn")}
                  className="p-1 border border-black rounded-sm mb-2"
                />
              </div>
              <div className="flex flex-col">
                <label>ব্যানার টেক্সট ইংরেজিতে</label>
                <input
                  defaultValue={bannerDetails.text[1]}
                  type="text"
                  {...register("bannerTextEn")}
                  className="p-1 border border-black rounded-sm mb-2"
                />
              </div>
              <div className="flex flex-col">
                <label>ব্যানার টেক্সট আরবীতে</label>
                <input
                  defaultValue={bannerDetails.text[2]}
                  type="text"
                  {...register("bannerTextAr")}
                  className="p-1 border border-black rounded-sm mb-2"
                />
              </div>
            </div>
          </div>
          {/* Image */}
          <div className="col-span-2 border border-black overflow-hidden">
            <img src={bannerDetails.thumb} className="p-2 w-full" alt="" />
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
          value="Edit Banner"
          className="py-2 px-8 bg-[#108D41] text-white mt-3"
        />
      </form>
    </div>
  );
}
