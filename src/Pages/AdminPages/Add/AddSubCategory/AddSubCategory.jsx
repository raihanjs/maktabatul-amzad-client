import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../../../Providers/ThemeProvider";
import { useAxiosPublic } from "../../../../hooks/useAxiosPublic";
import useCategories from "../../../../hooks/useCategories";

export default function AddSubCategory() {
  const navigate = useNavigate("");
  const axiosPublic = useAxiosPublic();
  const [categories] = useCategories();
  const { language } = useContext(ThemeContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { bnsubcategory, ensubcategory, arsubcategory, category } = data;

    const newSubCategory = {
      name: [bnsubcategory, ensubcategory, arsubcategory],
      mainCategory: category,
      subCategoryId: `${category}sub${Math.ceil(Math.random() * 1000000)}`,
    };
    // addSubSubject
    axiosPublic.post("/addsubsubject", newSubCategory).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Category added",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/admin/subcategorylist");
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
        <h3 className="text-2xl font-bold">Add Sub Category</h3>
      </div>
      <div className="m-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-5 gap-5">
            <div className="col-span-3">
              <div className="mb-5">
                <input
                  className="border w-full border-primary p-2"
                  placeholder="সাব ক্যাটেগরির নাম বাংলায়"
                  {...register("bnsubcategory")}
                />
                {errors.bnsubcategory && (
                  <span>এই ঘরটি অবশ্যই পুরন করতে হবে</span>
                )}
              </div>
              <div className="mb-5">
                <input
                  className="border w-full border-primary p-2"
                  placeholder="সাব ক্যাটেগরির নাম ইংরেজীতে"
                  {...register("ensubcategory")}
                />
                {errors.ensubcategory && (
                  <span>এই ঘরটি অবশ্যই পুরন করতে হবে</span>
                )}
              </div>
              <div className="mb-5">
                <input
                  className="border w-full border-primary p-2"
                  placeholder="সাব ক্যাটেগরির নাম আরবীতে"
                  {...register("arsubcategory", { required: true })}
                />
                {errors.arsubcategory && (
                  <span>এই ঘরটি অবশ্যই পুরন করতে হবে</span>
                )}
              </div>
            </div>
            <div className="col-span-2">
              <label htmlFor="">বিষয় নির্বাচন করুন</label>
              <select
                className="w-full border py-1 px-2 border-primary focus:border-red focus-visible:outline-0"
                {...register("category")}
              >
                <option value="">Select an Option</option>
                {categories.map((category, index) => (
                  <option value={category.categoryId} key={index}>
                    {category.name[language]}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <input
              type="submit"
              value="সাব ক্যাটেগরি অ্যাড করুন"
              className="text-white bg-primary py-2 px-5 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
