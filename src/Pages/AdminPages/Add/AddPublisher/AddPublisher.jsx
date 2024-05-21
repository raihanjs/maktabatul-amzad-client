import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAxiosPublic } from "../../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

export default function AddPublisher() {
  const navigate = useNavigate("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const axiosPublic = useAxiosPublic();

  const onSubmit = (data) => {
    const { bnPublisher, enPublisher, arPublisher } = data;
    const newPublisher = {
      name: [bnPublisher, enPublisher, arPublisher],
      publisherId: `country${Math.ceil(Math.random() * 1000000)}`,
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
            newPublisher.image = imageUrl;

            // addWriter
            axiosPublic.post("/addpublisher", newPublisher).then((res) => {
              if (res.data.acknowledged) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Publisher added",
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
      axiosPublic.post("/addpublisher", newPublisher).then((res) => {
        if (res.data.acknowledged) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Publisher added",
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
        <h3 className="text-2xl font-bold">Add Publisher</h3>
      </div>
      <div className="m-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-5 gap-3">
            <div className="col-span-3">
              <div className="mb-5">
                <input
                  className="border w-full border-primary p-2"
                  placeholder="পাবলিশারের নাম বাংলায়"
                  {...register("bnPublisher")}
                />
              </div>
              <div className="mb-5">
                <input
                  className="border w-full border-primary p-2"
                  placeholder="পাবলিশারের নাম ইংরেজীতে"
                  {...register("enPublisher")}
                />
              </div>
              <div className="mb-5">
                <input
                  className="border w-full border-primary p-2"
                  placeholder="পাবলিশারের নাম আরবীতে"
                  {...register("arPublisher", { required: true })}
                />
                {errors.arPublisher && (
                  <span className="text-sm text-red">
                    এই ঘরটি অবশ্যই পুরন করতে হবে
                  </span>
                )}
              </div>
            </div>
            <div className="col-span-2">
              <div className="border py-12 border-primary">
                <input
                  type="file"
                  src=""
                  {...register("image")}
                  className="mt-12 ml-12"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <input
              type="submit"
              value="পাবলিশার অ্যাড করুন"
              className="text-white bg-primary py-2 px-5 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
