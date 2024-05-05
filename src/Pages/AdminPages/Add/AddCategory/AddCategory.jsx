import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAxiosPublic } from "../../../../hooks/useAxiosPublic";

export default function AddCategory() {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { bncategory, encategory, arcategory } = data;

    const newCategory = {
      name: [bncategory, encategory, arcategory],
      categoryId: `category${Math.ceil(Math.random() * 1000000)}`,
    };

    // addSubSubject
    axiosPublic.post("/addsubject", newCategory).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Category added",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/admin/categorylist");
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
        <h3 className="text-2xl font-bold">Add Category</h3>
      </div>

      <div className="m-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <input
              className="border w-full border-primary p-2"
              placeholder="ক্যাটেগরির নাম বাংলায়"
              {...register("bncategory")}
            />
          </div>
          <div className="mb-5">
            <input
              className="border w-full border-primary p-2"
              placeholder="ক্যাটেগরির নাম ইংরেজীতে"
              {...register("encategory")}
            />
          </div>
          <div className="mb-5">
            <input
              className="border w-full border-primary p-2"
              placeholder="ক্যাটেগরির নাম আরবীতে"
              {...register("arcategory", { required: true })}
            />
            {errors.arcategory && (
              <span className="text-sm text-red">
                এই ঘরটি অবশ্যই পুরন করতে হবে
              </span>
            )}
          </div>
          <div>
            <input
              type="submit"
              value="ক্যাটেগরি অ্যাড করুন"
              className="text-white bg-primary py-2 px-5 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
