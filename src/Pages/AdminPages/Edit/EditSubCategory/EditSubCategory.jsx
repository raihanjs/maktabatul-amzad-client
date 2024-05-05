import { useLoaderData, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useAxiosPublic } from "../../../../hooks/useAxiosPublic";
import useCategories from "../../../../hooks/useCategories";
import { ThemeContext } from "../../../../Providers/ThemeProvider";

export default function EditSubCategory() {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const [categories, isLoading] = useCategories();
  const subCategory = useLoaderData();

  const { language } = useContext(ThemeContext);
  const { mainCategory, subCategoryId, name } = subCategory;

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
    };
    // addSubSubject
    axiosPublic
      .patch(`/editsubcategory/${subCategoryId}`, newSubCategory)
      .then((res) => {
        if (res.data.modifiedCount === 1) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Sub Category Updated",
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
      <div className="m-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-5 gap-5">
            <div className="col-span-3">
              <div className="mb-5">
                <label>সাব ক্যাটেগরির নাম বাংলায়</label>
                <input
                  className="border w-full border-primary p-2"
                  defaultValue={name[0]}
                  {...register("bnsubcategory")}
                />
              </div>
              <div className="mb-5">
                <label>সাব ক্যাটেগরির নাম ইংরেজীতে</label>
                <input
                  className="border w-full border-primary p-2"
                  defaultValue={name[1]}
                  {...register("ensubcategory")}
                />
              </div>
              <div className="mb-5">
                <label>সাব ক্যাটেগরির নাম আরবীতে</label>
                <input
                  className="border w-full border-primary p-2"
                  defaultValue={name[2]}
                  {...register("arsubcategory", { required: true })}
                />
                {errors.arsubcategory && (
                  <span className="text-sm text-red">
                    এই ঘরটি অবশ্যই পুরন করতে হবে
                  </span>
                )}
              </div>
            </div>
            <div className="col-span-2">
              <label htmlFor="">বিষয় পরিবর্তন করুন</label>
              <br />

              {isLoading ? (
                <>Loading categories ...</>
              ) : (
                <>
                  <select
                    defaultValue={mainCategory}
                    className="w-full border py-1 px-2 border-primary focus:border-red focus-visible:outline-0"
                    {...register("category")}
                  >
                    {categories.map((category) => (
                      <option value={category.categoryId} key={category._id}>
                        {category.name[language]}
                      </option>
                    ))}
                  </select>
                </>
              )}
            </div>
          </div>
          <div>
            <input
              type="submit"
              value="সাব ক্যাটেগরি আপডেট করুন"
              className="text-white bg-primary py-2 px-5 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
