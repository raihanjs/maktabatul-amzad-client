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

    axiosPublic.post("/addpublisher", newPublisher).then((res) => {
      console.log(res.data);
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
  };
  return (
    <div>
      <div className="text-center p-5 border border-black-b-2">
        <h3 className="text-2xl font-bold">Add Publisher</h3>
      </div>
      <div className="m-2">
        <form onSubmit={handleSubmit(onSubmit)}>
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
