import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAxiosPublic } from "../../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

export default function EditEditor() {
  const navigate = useNavigate();
  const editor = useLoaderData();
  const { _id, editorId, name } = editor;

  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { bnEditor, enEditor, arEditor } = data;
    const editedEditor = {
      name: [bnEditor, enEditor, arEditor],
    };

    axiosPublic.patch(`/editeditor/${editorId}`, editedEditor).then((res) => {
      if (res.data.modifiedCount === 1) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Editor Updated",
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
        <h3 className="text-2xl font-bold">Edit Book</h3>
      </div>
      <div className="m-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <label>এডিটরের নাম বাংলায়</label>
            <input
              className="border w-full border-primary p-2"
              defaultValue={name[0]}
              {...register("bnEditor")}
            />
          </div>
          <div className="mb-5">
            <label>এডিটরের নাম ইংরেজীতে</label>
            <input
              className="border w-full border-primary p-2"
              defaultValue={name[1]}
              {...register("enEditor")}
            />
          </div>
          <div className="mb-5">
            <label>এডিটরের নাম আরবীতে</label>
            <input
              className="border w-full border-primary p-2"
              defaultValue={name[2]}
              {...register("arEditor", { required: true })}
            />
            {errors.arEditor && <span>এই ঘরটি অবশ্যই পুরন করতে হবে</span>}
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
