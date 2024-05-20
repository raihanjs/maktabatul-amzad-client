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
import SelectMultiple from "../../../../Components/SelectMultiple/SelectMultiple";
import ToggleBtn from "../../../../Components/ToggleBtn/ToggleBtn";
import PickYear from "../../../../Components/PickYear/PickYear";

export default function EditBook() {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const bookDetails = useLoaderData();
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

  for (let singleWriter of bookDetails.writer) {
    const matched = writers.find((writer) => writer.writerId === singleWriter);
    if (matched) {
      const exist = selectedWriters.find(
        (selectedWriter) => selectedWriter.writerId === matched.writerId
      );
      if (!exist) {
        setSelectedWriters([...selectedWriters, matched]);
      }
    }
  }
  for (let singleEditor of bookDetails.editor) {
    const matched = editors.find((editor) => editor.editorId === singleEditor);
    if (matched) {
      const exist = selectedEditors.find(
        (selectedEditor) => selectedEditor.editorId === matched.editorId
      );
      if (!exist) {
        setSelectedEditors([...selectedEditors, matched]);
      }
    }
  }
  for (let singleTranslator of bookDetails.translator) {
    const matched = translators.find(
      (translator) => translator.translatorId === singleTranslator
    );
    if (matched) {
      const exist = selectedTranslators.find(
        (selectedTranslator) =>
          selectedTranslator.translatorId === matched.translatorId
      );
      if (!exist) {
        setSelectedTranslators([...selectedTranslators, matched]);
      }
    }
  }
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

  const [showCategory, setShowCategory] = useState(bookDetails.showCategory);
  const [showSubCategory, setShowSubCategory] = useState(
    bookDetails.showSubCategory
  );
  const [showWriters, setShowWriters] = useState(bookDetails.showWriters);
  const [showEditors, setShowEditors] = useState(bookDetails.showEditors);
  const [showTranslators, setShowTranslators] = useState(
    bookDetails.showTranslators
  );
  const [selectedYear, setSelectedYear] = useState(bookDetails.publishedYear);
  const [binding, setBinding] = useState(bookDetails.binding);
  const [paperType, setPaperType] = useState(bookDetails.paperType);

  const [showImport, setShowImport] = useState(bookDetails.showImport);
  const [showPublisher, setShowPublisher] = useState(bookDetails.showPublisher);
  const [showPages, setShowPages] = useState(bookDetails.showPages);
  const [showPrice, setShowPrice] = useState(bookDetails.showPrice);
  const [showPieces, setShowPieces] = useState(bookDetails.showPieces);
  const [showStatus, setShowStatus] = useState(bookDetails.showStatus);
  const [showSummary, setShowSummary] = useState(bookDetails.showSummary);
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
      writer: writersArr,
      translator: translatorsArr,
      editor: editorsArr,
      publisher: publisher,
      importedCountry: importedCountry,
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
                <label>নাম বাংলায়</label>
                <input
                  className="border border-black border border-black-primary p-2 w-full mb-2"
                  // placeholder="বইয়ের নাম বাংলায়"
                  defaultValue={bookDetails.title[0]}
                  {...register("bookBangla")}
                />
              </div>
              <div>
                <label>নাম ইংরেজীতে</label>
                <input
                  className="border border-black border border-black-primary p-2 w-full mb-2"
                  defaultValue={bookDetails.title[1]}
                  {...register("bookEnglish")}
                />
              </div>
              <div>
                <label>নাম আরবীতে</label>
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
              <label>ক্যাটাগরি সিলেক্ট করুন</label>
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
              <label>সাব ক্যাটাগরি সিলেক্ট করুন</label>
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

          {/* Publisher & Importer selection */}
          <div className="flex justify-between">
            <div className="w-6/12 my-5 flex flex-col">
              <label>পাবলিশার সিলেক্ট করুন</label>
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
              <label>ইমপোর্ট দেশ সিলেক্ট করুন</label>
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
              <label>বইয়ের পৃষ্ঠা</label>
              <input
                type="number"
                defaultValue={bookDetails.pages}
                {...register("bookPages", { required: true })}
                className="border border-black"
              />
              {errors.bookPages && (
                <span className="text-red text-sm">
                  এই ঘরটি অবশ্যই পুরন করতে হবে
                </span>
              )}
            </div>
            {/* Book Price */}
            <div className="my-5 flex flex-col">
              <label>বইয়ের দাম</label>
              <input
                type="number"
                defaultValue={bookDetails.price}
                {...register("bookPrice", { required: true })}
                className="border border-black"
              />
              {errors.bookPrice && (
                <span className="text-red text-sm">
                  এই ঘরটি অবশ্যই পুরন করতে হবে
                </span>
              )}
            </div>

            {/* Book Pieces */}
            <div className="my-5 flex flex-col">
              <label>বইয়ের সংখ্যা</label>
              <input
                type="number"
                defaultValue={bookDetails.stock}
                {...register("bookQuantity", { required: true })}
                className="border border-black"
              />
              {errors.bookQuantity && (
                <span className="text-red text-sm">
                  এই ঘরটি অবশ্যই পুরন করতে হবে
                </span>
              )}
            </div>
            {/* Book Sold */}
            <div className="my-5 flex flex-col">
              <label>মোট বিক্রিত বই</label>
              <input
                type="number"
                defaultValue={bookDetails.sold}
                {...register("bookSold")}
                className="border border-black"
              />
            </div>
            {/* Book Status */}
            <div className="my-5 flex flex-col">
              <label>Book Status</label>
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
                defaultValue={binding}
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
                defaultValue={paperType}
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
                defaultValue={bookDetails.volume}
                type="text"
                className="p-2 border border-black"
                {...register("volume")}
              />
            </div>
            {/* Part */}
            <div>
              <p>খন্ড</p>
              <input
                defaultValue={bookDetails.part}
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
            <ToggleBtn
              show={showImport}
              setShow={setShowImport}
              name="Import"
            />
            <ToggleBtn
              show={showPublisher}
              setShow={setShowPublisher}
              name="Publisher"
            />
            <ToggleBtn show={showPages} setShow={setShowPages} name="Pages" />
            <ToggleBtn show={showPieces} setShow={setShowPieces} name="Stock" />
            <ToggleBtn show={showPrice} setShow={setShowPrice} name="Price" />
            <ToggleBtn
              show={showStatus}
              setShow={setShowStatus}
              name="Status"
            />
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
            <ToggleBtn
              show={showVolume}
              setShow={setShowVolume}
              name="Volume"
            />
            <ToggleBtn show={showPart} setShow={setShowPart} name="Part" />
          </div>

          <input
            type="submit"
            value="Edit Book"
            className="py-2 px-8 bg-[#108D41] text-white"
          />
        </form>
      </div>
    </div>
  );
}
