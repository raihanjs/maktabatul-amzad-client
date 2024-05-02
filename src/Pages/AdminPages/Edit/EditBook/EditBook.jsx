import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../../../Providers/ThemeProvider";

// Hooks
import useWriters from "../../../../hooks/useWriters";
import useCategories from "../../../../hooks/useCategories";
import useEditors from "../../../../hooks/useEditors";
import usePublishers from "../../../../hooks/usePublishers";
import useTranslators from "../../../../hooks/useTranslators";
import useImportedCountries from "../../../../hooks/useImportedCountries";
import { useAxiosPublic } from "../../../../hooks/useAxiosPublic";
import MultipleOption from "../../../../Components/MultipleOption/MultipleOption";

export default function EditBook() {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const bookDetails = useLoaderData();
  // console.log(bookDetails);
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

  const [selectedWriters, setSelectedWriters] = useState(
    bookDetails.writer || []
  );
  const [selectedEditors, setSelectedEditors] = useState(
    bookDetails.editor || []
  );
  const [selectedTranslators, setSelectedTranslators] = useState(
    bookDetails.translator || []
  );
  const [selectedOption, setSelectedOption] = useState(bookDetails.category);
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
    const category =
      data.category.length > 0 ? data.category : bookDetails.category;
    const subCategory =
      data.subCategory.length > 0 ? data.subCategory : bookDetails.subCategory;
    const publisher =
      data.publisher.length > 0 ? data.publisher : bookDetails.publisher;
    const importedCountry =
      data.country.length > 0 ? data.country : bookDetails.importedCountry;

    const updateBook = {
      title: [data.bookBangla, data.bookEnglish, data.bookArabic],
      category: category,
      subCategory: subCategory,
      writer: selectedWriters,
      translator: selectedTranslators,
      editor: selectedEditors,
      publisher: publisher,
      importedCountry: importedCountry,
      price: data.bookPrice,
      pages: data.bookPages,
      stock: data.bookQuantity,
      desc: [data.bnDesc, data.enDesc, data.arDesc],
      status: data.bookStatus,
      sold: 0,
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
            updateBook.thumb = imageUrl;
            // Edit Book
            console.log(updateBook);
            axiosPublic
              .patch(`/editbook/${bookDetails._id}`, updateBook)
              .then((res) => {
                if (res.data.acknowledged) {
                  navigate("/admin/booklist");
                }
              });
          }
        });
    } else {
      updateBook.thumb = bookDetails.thumb;
      axiosPublic
        .patch(`/editbook/${bookDetails._id}`, updateBook)
        .then((res) => {
          if (res.data.acknowledged) {
            navigate("/admin/booklist");
          }
        });
      console.log("No Image", updateBook);
    }
  };
  return (
    <div>
      <div className="text-center p-5 border border-black-b-2">
        <h3 className="text-2xl font-bold">Edit Book</h3>
      </div>

      <div className="m-2">
        <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
          {/* Details */}

          <div className=" flex justify-between items-center">
            {/* Book Name Bangla, English and Arabic */}
            <div className="w-8/12">
              <div>
                <label htmlFor="">নাম বাংলায়</label>
                <input
                  className="border border-black border border-black-primary p-2 w-full mb-2"
                  // placeholder="বইয়ের নাম বাংলায়"
                  defaultValue={bookDetails.title[0]}
                  {...register("bookBangla")}
                />
              </div>
              <div>
                <label htmlFor="">নাম ইংরেজীতে</label>
                <input
                  className="border border-black border border-black-primary p-2 w-full mb-2"
                  defaultValue={bookDetails.title[1]}
                  {...register("bookEnglish")}
                />
              </div>
              <div>
                <label htmlFor="">নাম আরবীতে</label>
                <input
                  className="border border-black border border-black-primary p-2 w-full mb-2"
                  defaultValue={bookDetails.title[2]}
                  {...register("bookArabic", { required: true })}
                />
                {errors.arbook && <p>এই ঘরটি অবশ্যই পুরন করতে হবে</p>}
              </div>
            </div>
            {/* Image */}
            <div className="w-3/12 border border-black overflow-hidden">
              <p className="text-center">বইয়ের ছবি</p>
              <img
                src={bookDetails.thumb}
                className="p-2 h-32 mx-auto"
                alt=""
              />
              <input
                type="file"
                src=""
                {...register("image")}
                className="mt-12 ml-12"
                alt=""
              />
            </div>
          </div>
          {/* Category & SubCategory selection */}
          <div className="flex justify-between">
            <div className="w-6/12 my-5 flex flex-col">
              <label htmlFor="">ক্যাটাগরি সিলেক্ট করুন</label>
              <select
                {...register("category")}
                value={selectedOption}
                onChange={handleChange}
                className="border border-black"
              >
                {categories.map((category) => (
                  <option
                    value={category.categoryId}
                    key={category._id}
                    selected={category.categoryId === bookDetails.category}
                  >
                    {category.name[language]}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-5/12 my-5 flex flex-col">
              <label htmlFor="">সাব ক্যাটাগরি সিলেক্ট করুন</label>
              <select
                {...register("subCategory")}
                defaultValue={bookDetails.subCategory}
                className="border border-black"
              >
                {subCategories.map((subCategory) => (
                  <option
                    value={subCategory.subCategoryId}
                    key={subCategory._id}
                    selected={
                      subCategory.subCategoryId === bookDetails.subCategory
                    }
                  >
                    {subCategory.name[language]}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* Writer and Translator and Editor */}
          <div className="flex justify-between">
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

          {/* Publisher & Importer selection */}
          <div className="flex justify-between">
            <div className="w-6/12 my-5 flex flex-col">
              <label htmlFor="">পাবলিশার সিলেক্ট করুন</label>
              <select
                {...register("publisher")}
                defaultValue={bookDetails.publisher}
                className="border border-black"
              >
                {publishers.map((publisher) => (
                  <option
                    value={publisher.publisherId}
                    key={publisher._id}
                    // selected={bookDetails.publisher === publisher.publisherId}
                  >
                    {publisher.name[language]}
                  </option>
                ))}
              </select>
            </div>
            {/* Imported selection */}
            <div className="w-5/12 my-5 flex flex-col">
              <label htmlFor="">ইমপোর্ট দেশ সিলেক্ট করুন</label>
              <select
                {...register("country")}
                defaultValue={bookDetails.importedCountry}
                className="border border-black"
              >
                {importedCountries.map((country) => (
                  <option
                    value={country.countryId}
                    key={country._id}
                    // selected={
                    //   bookDetails.importedCountry === country.countryId
                    // }
                  >
                    {country.name[language]}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* Book Pages, Price and Quantity */}
          <div className="flex justify-between spcae-x-4">
            {/* Book Page */}
            <div className="my-5 flex flex-col">
              <label htmlFor="">বইয়ের পৃষ্ঠা</label>
              <input
                defaultValue={bookDetails.pages}
                {...register("bookPages", { required: true })}
                className="border border-black"
              />
              {errors.bookPages && <span>এই ঘরটি অবশ্যই পুরন করতে হবে</span>}
            </div>
            {/* Book Price */}
            <div className="my-5 flex flex-col">
              <label htmlFor="">বইয়ের দাম</label>
              <input
                defaultValue={bookDetails.price}
                {...register("bookPrice", { required: true })}
                className="border border-black"
              />
              {errors.bookPrice && <span>এই ঘরটি অবশ্যই পুরন করতে হবে</span>}
            </div>

            {/* Book Price */}
            <div className="my-5 flex flex-col">
              <label htmlFor="">বইয়ের সংখ্যা</label>
              <input
                defaultValue={bookDetails.stock}
                {...register("bookQuantity", { required: true })}
                className="border border-black"
              />
              {errors.bookQuantity && <span>এই ঘরটি অবশ্যই পুরন করতে হবে</span>}
            </div>
            {/* Book Status */}
            <div className="my-5 flex flex-col">
              <label htmlFor="">Book Status</label>
              <select
                {...register("bookStatus")}
                defaultValue={bookDetails.status}
                className="border border-black"
              >
                <option value="published">Published</option>
                <option value="upcoming">Upcoming</option>
              </select>
            </div>
          </div>
          {/* Book Summary */}
          <div>
            <div className="">
              <textarea
                defaultValue={bookDetails.desc[0]}
                {...register("bnDesc")}
                className="border border-black w-full h-40 p-2"
                placeholder="Bangla Summary"
              ></textarea>
            </div>
            <div className="">
              <textarea
                defaultValue={bookDetails.desc[1]}
                {...register("enDesc")}
                className="border border-black w-full h-40 p-2"
                placeholder="English Summary"
              ></textarea>
            </div>
            <div className="">
              <textarea
                defaultValue={bookDetails.desc[2]}
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
    </div>
  );
}
