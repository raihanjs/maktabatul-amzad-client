import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { ThemeContext } from "../../../../Providers/ThemeProvider";

// Hooks
import useEditors from "../../../../hooks/useEditors";
import useWriters from "../../../../hooks/useWriters";
import usePublishers from "../../../../hooks/usePublishers";
import useCategories from "../../../../hooks/useCategories";
import useTranslators from "../../../../hooks/useTranslators";
import { useAxiosPublic } from "../../../../hooks/useAxiosPublic";
import useImportedCountries from "../../../../hooks/useImportedCountries";

// Component
import MultipleOption from "../../../../Components/MultipleOption/MultipleOption";

export default function AddBook() {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { language } = useContext(ThemeContext);
  const imageHostingToken = "e1f8cb2a3ec0064d89280dcbe819c1b7";

  const [writers] = useWriters();
  const [editors] = useEditors();
  const [categories] = useCategories();
  const [publishers] = usePublishers();
  const [translators] = useTranslators();
  const [importedCountries] = useImportedCountries();

  const [selectedWriters, setSelectedWriters] = useState([]);
  const [selectedEditors, setSelectedEditors] = useState([]);
  const [selectedTranslators, setSelectedTranslators] = useState([]);

  const [selectedOption, setSelectedOption] = useState(
    categories[0]?.categoryId
  );

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  // Get sub categories for selectedCategory
  const [subCategories, setSubCategories] = useState([]);
  useEffect(() => {
    fetch(
      "https://maktabatul-amzad-s-tan.vercel.app/api/subcategories/getsubCategory",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ mainCategory: selectedOption }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setSubCategories(data);
      });
  }, [selectedOption]);

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
          const imageUrl = imgRes.data.display_url;
          const newBook = {
            thumb: imageUrl,
            title: [data.bookBangla, data.bookEnglish, data.bookArabic],
            category: data.category,
            subCategory: data.subCategory,
            writer: selectedWriters,
            translator: selectedTranslators,
            editor: selectedEditors,
            publisher: data.publisher,
            importedCountry: data.country,
            price: data.bookPrice,
            pages: data.bookPages,
            stock: data.bookQuantity,
            desc: [data.bnDesc, data.enDesc, data.arDesc],
            status: data.bookStatus,
            sold: 0,
          };
          console.log(newBook);
          // addbook
          axiosPublic.post("/addbook", newBook).then((res) => {
            if (res.data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Book added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/admin/booklist");
            } else {
              Swal.fire({
                icon: "error",
                title: "বইটি যুক্ত করা সম্ভব হয়নি",
              });
            }
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "বই এর ছবি অবশ্যই দিতে হবে",
          });
        }
      });
  };
  return (
    <div>
      <div className="text-center p-5 border border-black-b-2">
        <h3 className="text-2xl font-bold">Edit Book</h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="m-2">
        {/* Details */}
        <div className="flex justify-between">
          {/* Book Name Bangla, English and Arabic */}
          <div className="w-7/12">
            <div className="mb-2">
              <input
                className="border border-black p-2 w-full"
                placeholder="বইয়ের নাম বাংলায়"
                {...register("bookBangla")}
              />
            </div>
            <div className="mb-2">
              <input
                className="border border-black p-2 w-full"
                placeholder="বইয়ের নাম ইংরেজীতে"
                {...register("bookEnglish")}
              />
            </div>
            <div className="mb-2">
              <input
                className="border border-black p-2 w-full"
                placeholder="বইয়ের নাম আরবীতে"
                {...register("bookArabic", { required: true })}
              />
              {errors.arbook && (
                <span className="text-red">এই ঘরটি অবশ্যই পুরন করতে হবে</span>
              )}
            </div>
          </div>
          {/* Image */}
          <div className="w-4/12 border border-black overflow-hidden">
            <input
              type="file"
              src=""
              {...register("image")}
              className="mt-12 ml-12"
              alt=""
            />
          </div>
        </div>

        {/* Category & Subcategory */}
        <div className="flex items-center justify-between my-5">
          <div className="w-7/12">
            <label>ক্যাটাগরি সিলেক্ট করুন</label>
            <select
              {...register("category")}
              value={selectedOption}
              onChange={handleChange}
              className="border border-black w-full p-1"
            >
              {categories.map((category) => (
                <option value={category.categoryId} key={category._id}>
                  {category.name[language]}
                </option>
              ))}
            </select>
          </div>

          <div className="w-4/12">
            <label>সাব ক্যাটাগরি সিলেক্ট করুন</label>
            <select
              {...register("subCategory")}
              className="border border-black w-full p-1"
            >
              {subCategories.map((subCategory) => (
                <option value={subCategory.subCategoryId} key={subCategory._id}>
                  {subCategory.name[language]}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Writer and Translator and Editor */}
        <div className="flex justify-between space-x-4">
          {/* Writer selection */}
          <div className="w-4/12">
            <p>Select Writers</p>
            <MultipleOption
              itemId="writerId"
              items={writers}
              selected={selectedWriters}
              setSelected={setSelectedWriters}
            />
          </div>
          {/* Translator selection */}
          <div className="w-4/12">
            <p>Select Translators</p>
            <MultipleOption
              itemId="translatorId"
              items={translators}
              selected={selectedTranslators}
              setSelected={setSelectedTranslators}
            />
          </div>
          {/* Editor selection */}
          <div className="w-3/12">
            <p>Select Editors</p>
            <MultipleOption
              itemId="editorId"
              items={editors}
              selected={selectedEditors}
              setSelected={setSelectedEditors}
            />
          </div>
        </div>

        {/* Publisher & Importer */}
        <div className="flex items-center justify-between my-5">
          <div className="w-6/12">
            <label>পাবলিশার সিলেক্ট করুন</label>
            <select
              {...register("publisher")}
              className="border border-black w-full p-1"
            >
              {publishers.map((publisher) => (
                <option value={publisher.publisherId} key={publisher._id}>
                  {publisher.name[language]}
                </option>
              ))}
            </select>
          </div>
          <div className="w-5/12">
            <label>ইমপোর্ট দেশ সিলেক্ট করুন</label>
            <select
              {...register("country")}
              className="border border-black w-full p-1"
            >
              {importedCountries.map((country) => (
                <option value={country.countryId} key={country._id}>
                  {country.name[language]}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Book Pages, Price, Quantity and status*/}
        <div className="flex justify-between mb-5">
          {/* Book Page */}
          <div className="w-3/12">
            <label>বইয়ের পৃষ্ঠা</label>
            <input
              {...register("bookPages", { required: true })}
              className="border border-black w-full p-1"
            />
            {errors.bookPages && (
              <span className="text-red">এই ঘরটি অবশ্যই পুরন করতে হবে</span>
            )}
          </div>
          {/* Book Price */}
          <div className="w-3/12">
            <label>বইয়ের দাম</label>
            <input
              {...register("bookPrice", { required: true })}
              className="border border-black w-full p-1"
            />
            {errors.bookPrice && (
              <span className="text-red">এই ঘরটি অবশ্যই পুরন করতে হবে</span>
            )}
          </div>

          {/* Book Price */}
          <div className="w-2/12">
            <label>বইয়ের সংখ্যা</label>
            <input
              {...register("bookQuantity", { required: true })}
              className="border border-black w-full p-1"
            />
            {errors.bookQuantity && (
              <span className="text-red">এই ঘরটি অবশ্যই পুরন করতে হবে</span>
            )}
          </div>
          {/* Book Status */}
          <div className="w-3/12">
            <label>Book Status</label>
            <select
              {...register("bookStatus")}
              className="border border-black w-full p-1"
            >
              <option value="published">Published</option>
              <option value="published">Upcoming</option>
            </select>
          </div>
        </div>

        {/* Book Summary */}
        <div>
          <div className="">
            <textarea
              {...register("bnDesc")}
              className="border border-black w-full h-40 p-2"
              placeholder="Bangla Summary"
            ></textarea>
          </div>
          <div className="">
            <textarea
              {...register("enDesc")}
              className="border border-black w-full h-40 p-2"
              placeholder="English Summary"
            ></textarea>
          </div>
          <div className="">
            <textarea
              {...register("arDesc")}
              className="border border-black w-full h-40 p-2"
              placeholder="Arabic Summary"
            ></textarea>
          </div>
        </div>

        <input
          type="submit"
          value="Add Book"
          className="py-2 px-8 bg-[#108D41] text-white"
        />
      </form>
    </div>
  );
}
