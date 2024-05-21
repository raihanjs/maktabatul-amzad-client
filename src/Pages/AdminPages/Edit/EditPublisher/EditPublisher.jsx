import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAxiosPublic } from "../../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { FaUserTie } from "react-icons/fa";

export default function EditPublisher() {
  const navigate = useNavigate();
  const publisher = useLoaderData();
  const { _id, publisherId, name, image } = publisher;

  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { bnPublisher, enPublisher, arPublisher } = data;
    const editedPublisher = {
      name: [bnPublisher, enPublisher, arPublisher],
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
            editedPublisher.image = imageUrl;

            // addWriter
            axiosPublic
              .patch(`/editpublisher/${_id}`, editedPublisher)
              .then((res) => {
                if (res.data.modifiedCount === 1) {
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Publisher Updated",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate("/admin/publisherlist");
                } else {
                  Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                  });
                }
              });
          }
        });
    } else {
      editedPublisher.image = image;
      axiosPublic
        .patch(`/editpublisher/${_id}`, editedPublisher)
        .then((res) => {
          if (res.data.modifiedCount === 1) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Publisher Updated",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/admin/publisherlist");
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
            });
          }
        });
    }
  };
  return (
    <div>
      <div className="text-center p-5 border border-black-b-2">
        <h3 className="text-2xl font-bold">Edit Publisher</h3>
      </div>

      <div className="m-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-5 gap-3">
            <div className="col-span-3">
              <div className="mb-5">
                <label>পাবলিশারের নাম বাংলায়</label>
                <input
                  className="border w-full border-primary p-2"
                  defaultValue={name[0]}
                  {...register("bnPublisher")}
                />
              </div>
              <div className="mb-5">
                <label>পাবলিশারের নাম ইংরেজীতে</label>
                <input
                  className="border w-full border-primary p-2"
                  defaultValue={name[1]}
                  {...register("enPublisher")}
                />
              </div>
              <div className="mb-5">
                <label>পাবলিশারের নাম আরবীতে</label>
                <input
                  className="border w-full border-primary p-2"
                  defaultValue={name[2]}
                  {...register("arPublisher", { required: true })}
                />
                {errors.arPublisher && (
                  <span className="text-red text-sm">
                    এই ঘরটি অবশ্যই পুরন করতে হবে
                  </span>
                )}
              </div>
            </div>
            <div className="col-span-2">
              <div className="border border-primary">
                <p className="mb-2">পাবলিশারের ছবি</p>
                {image ? (
                  <img src={image} alt="" />
                ) : (
                  <FaUserTie className="text-6xl my-5 mx-auto" />
                )}

                <input
                  type="file"
                  src=""
                  {...register("image")}
                  className=""
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <input
              type="submit"
              value="আপডেট করুন"
              className="text-white bg-primary py-2 px-5 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
