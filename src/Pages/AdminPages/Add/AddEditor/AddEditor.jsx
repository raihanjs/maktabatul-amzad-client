import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAxiosPublic } from "../../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

export default function AddEditor() {
  const navigate = useNavigate("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const axiosPublic = useAxiosPublic();

  const onSubmit = (data) => {
    const { bnEditor, enEditor, arEditor } = data;
    const newEditor = {
      name: [bnEditor, enEditor, arEditor],
      editorId: `editor${Math.ceil(Math.random() * 1000000)}`,
    };

    axiosPublic.post("/addeditor", newEditor).then((res) => {
      if (res.data.acknowledged) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Editor added",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/admin/editorlist");
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
        <h3 className="text-2xl font-bold">Add Writer</h3>
      </div>
      <div className="m-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <input
              className="border w-full border-primary p-2"
              placeholder="এডিটর নাম বাংলায়"
              {...register("bnEditor")}
            />
          </div>
          <div className="mb-5">
            <input
              className="border w-full border-primary p-2"
              placeholder="এডিটর নাম ইংরেজীতে"
              {...register("enEditor")}
            />
          </div>
          <div className="mb-5">
            <input
              className="border w-full border-primary p-2"
              placeholder="এডিটর নাম আরবীতে"
              {...register("arEditor", { required: true })}
            />
            {errors.arEditor && (
              <span className="text-red text-sm">
                এই ঘরটি অবশ্যই পুরন করতে হবে
              </span>
            )}
          </div>
          <div>
            <input
              type="submit"
              value="এডিটর অ্যাড করুন"
              className="text-white bg-primary py-2 px-5 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
