import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";

import { ThemeContext } from "../../../../Providers/ThemeProvider";

// Hooks
import useEditors from "../../../../hooks/useEditors";
import useWriters from "../../../../hooks/useWriters";
import usePublishers from "../../../../hooks/usePublishers";
import useCategories from "../../../../hooks/useCategories";
import useTranslators from "../../../../hooks/useTranslators";
import { useAxiosPublic } from "../../../../hooks/useAxiosPublic";
import useImportedCountries from "../../../../hooks/useImportedCountries";
import SelectMultiple from "../../../../Components/SelectMultiple/SelectMultiple";
import ToggleBtn from "../../../../Components/ToggleBtn/ToggleBtn";
import PickYear from "../../../../Components/PickYear/PickYear";

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
  const [selectedYear, setSelectedYear] = useState();
  const [binding, setBinding] = useState("");
  const [paperType, setPaperType] = useState("");

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

  const [showCategory, setShowCategory] = useState(true);
  const [showSubCategory, setShowSubCategory] = useState(true);
  const [showWriters, setShowWriters] = useState(true);
  const [showEditors, setShowEditors] = useState(true);
  const [showTranslators, setShowTranslators] = useState(true);
  const [showImport, setShowImport] = useState(true);
  const [showPublisher, setShowPublisher] = useState(true);
  const [showPages, setShowPages] = useState(true);
  const [showPrice, setShowPrice] = useState(true);
  const [showPieces, setShowPieces] = useState(true);
  const [showStatus, setShowStatus] = useState(true);
  const [showSummary, setShowSummary] = useState(true);
  const [showPapertype, setShowPapertype] = useState(true);
  const [showBinding, setShowBinding] = useState(true);
  const [showPublishYear, setShowPublishYear] = useState(true);
  const [showVolume, setShowVolume] = useState(true);
  const [showPart, setShowPart] = useState(true);

  const onSubmit = (data) => {
    const writersArr = [];
    selectedWriters.forEach((selectedWr) =>
      writersArr.push(selectedWr.writerId)
    );
    const editorsArr = [];
    selectedEditors.forEach((selectedEr) =>
      editorsArr.push(selectedEr.editorId)
    );
    const translatorsArr = [];
    selectedTranslators.forEach((selectedTr) =>
      translatorsArr.push(selectedTr.translatorId)
    );

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
            writer: writersArr,
            translator: translatorsArr,
            editor: editorsArr,
            publisher: data.publisher,
            importedCountry: data.country,
            price: parseInt(data.bookPrice),
            pages: parseInt(data.bookPages),
            stock: parseInt(data.bookQuantity),
            desc: [data.bnDesc, data.enDesc, data.arDesc],
            status: data.bookStatus,
            sold: parseInt(data.bookSold),
            binding: binding,
            publishedYear: selectedYear,
            paperType: paperType,
            volume: data.volume,
            part: data.part,
            showCategory: showCategory,
            showSubCategory: showSubCategory,
            showWriters: showWriters,
            showEditors: showEditors,
            showTranslators: showTranslators,
            showImport: showImport,
            showPublisher: showPublisher,
            showPages: showPages,
            showPrice: showPrice,
            showPieces: showPieces,
            showStatus: showStatus,
            showSummary: showSummary,
            showPapertype: showPapertype,
            showBinding: showBinding,
            showPublishYear: showPublishYear,
            showVolume: showVolume,
            showPart: showPart,
          };
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
                <span className="text-red text-sm ">
                  এই ঘরটি অবশ্যই পুরন করতে হবে
                </span>
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
        <div className="grid grid-cols-3 gap-2">
          {/* Writers selection */}
          <div>
            <label>লেখক সিলেক্ট করুন</label>
            <SelectMultiple
              items={writers}
              itemId="writerId"
              selected={selectedWriters}
              setSelected={setSelectedWriters}
            />
          </div>
          {/* Editors selection */}
          <div>
            <label>ইডিটর সিলেক্ট করুন</label>

            <SelectMultiple
              items={editors}
              itemId="editorId"
              selected={selectedEditors}
              setSelected={setSelectedEditors}
            />
          </div>
          {/* Translators selection */}
          <div>
            <label>ট্রান্সলেটর সিলেক্ট করুন</label>

            <SelectMultiple
              items={translators}
              itemId="translatorId"
              selected={selectedTranslators}
              setSelected={setSelectedTranslators}
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
              type="number"
              {...register("bookPages", { required: true })}
              className="border border-black w-full p-1"
            />
            {errors.bookPages && (
              <span className="text-red text-sm ">
                এই ঘরটি অবশ্যই পুরন করতে হবে
              </span>
            )}
          </div>
          {/* Book Price */}
          <div className="w-3/12">
            <label>বইয়ের দাম</label>
            <input
              type="number"
              {...register("bookPrice", { required: true })}
              className="border border-black w-full p-1"
            />
            {errors.bookPrice && (
              <span className="text-red text-sm ">
                এই ঘরটি অবশ্যই পুরন করতে হবে
              </span>
            )}
          </div>

          {/* Book Price */}
          <div className="w-2/12">
            <label>বইয়ের সংখ্যা</label>
            <input
              type="number"
              {...register("bookQuantity", { required: true })}
              className="border border-black w-full p-1"
            />
            {errors.bookQuantity && (
              <span className="text-red text-sm ">
                এই ঘরটি অবশ্যই পুরন করতে হবে
              </span>
            )}
          </div>
          {/* Book Price */}
          <div className="w-2/12">
            <label>মোট বিক্রিত বই</label>
            <input
              type="number"
              defaultValue={0}
              {...register("bookSold")}
              className="border border-black w-full p-1"
            />
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

        {/* Binding, Part, Volume, PublishedYear, PaperTypes */}
        <div className="flex justify-between mb-5">
          {/* Publish Year */}
          <div>
            <p>প্রকাশকাল</p>
            <PickYear
              selectedYear={selectedYear}
              setSelectedYear={setSelectedYear}
            />
          </div>

          {/* Bnding */}
          <div>
            <p>বাঁধাই</p>
            <select
              onChange={(e) => setBinding(e.target.value)}
              className="border border-black py-1 px-5 capitalize"
            >
              <option value="" className="capitalize">
                Select
              </option>
              <option value="paperback" className="capitalize">
                paperback
              </option>
              <option value="hardcover" className="capitalize">
                hardcover
              </option>
            </select>
          </div>
          {/* Papertypes */}
          <div>
            <p>কাগজের ধরণ</p>
            <select
              onChange={(e) => setPaperType(e.target.value)}
              className="border border-black py-1 px-5 capitalize"
            >
              <option value="" className="capitalize">
                Select
              </option>
              <option value="white" className="capitalize">
                white
              </option>
              <option value="newsprint" className="capitalize">
                newsprint
              </option>
            </select>
          </div>
          {/* Volume */}
          <div>
            <p>ভলিউম</p>
            <input
              placeholder="Volume"
              type="text"
              className="p-2 border border-black"
              {...register("volume")}
            />
          </div>
          {/* Part */}
          <div>
            <p>খন্ড</p>
            <input
              placeholder="Part"
              type="text"
              className="p-2 border border-black"
              {...register("part")}
            />
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

        {/* Set Show */}
        <div className="mb-3 flex flex-wrap gap-2">
          <ToggleBtn
            show={showCategory}
            setShow={setShowCategory}
            name="Category"
          />
          <ToggleBtn
            show={showSubCategory}
            setShow={setShowSubCategory}
            name="Sub Category"
          />
          <ToggleBtn
            show={showWriters}
            setShow={setShowWriters}
            name="Writers"
          />
          <ToggleBtn
            show={showTranslators}
            setShow={setShowTranslators}
            name="Translators"
          />
          <ToggleBtn
            show={showEditors}
            setShow={setShowEditors}
            name="Editors"
          />
          <ToggleBtn show={showImport} setShow={setShowImport} name="Import" />
          <ToggleBtn
            show={showPublisher}
            setShow={setShowPublisher}
            name="Publisher"
          />
          <ToggleBtn show={showPages} setShow={setShowPages} name="Pages" />
          <ToggleBtn show={showPieces} setShow={setShowPieces} name="Stock" />
          <ToggleBtn show={showPrice} setShow={setShowPrice} name="Price" />
          <ToggleBtn show={showStatus} setShow={setShowStatus} name="Status" />
          <ToggleBtn
            show={showSummary}
            setShow={setShowSummary}
            name="Summary"
          />
          <ToggleBtn
            show={showBinding}
            setShow={setShowBinding}
            name="Binding"
          />
          <ToggleBtn
            show={showPapertype}
            setShow={setShowPapertype}
            name="Papertype"
          />
          <ToggleBtn
            show={showPublishYear}
            setShow={setShowPublishYear}
            name="Published Year"
          />
          <ToggleBtn show={showVolume} setShow={setShowVolume} name="Volume" />
          <ToggleBtn show={showPart} setShow={setShowPart} name="Part" />
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
