import React, { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

import { ThemeContext } from "../../Providers/ThemeProvider";
import { CartContext } from "../../Providers/CartProviders";
import RelatedBooks from "../Auth/Shared/RelatedBooks/RelatedBooks";
import PrimaryBtn from "../../Components/PrimaryBtn/PrimaryBtn";
import PageTitle from "../../Components/PageTitle/PageTitle";

export default function BookPage() {
  const navigate = useNavigate();
  const bookDetails = useLoaderData();

  const { language } = useContext(ThemeContext);
  const { handleAddtoCart } = useContext(CartContext);

  const {
    _id,
    category,
    price,
    title,
    thumb,
    status,
    stock,
    desc,
    writerDetails,
    translatorDetails,
    editorDetails,
    publisherDetails,
    categoryDetails,
    subCategoryDetails,
  } = bookDetails;
  return (
    <section className="container">
      <PageTitle title={[title[0], title[1], title[2]]} />
      <div className="container mx-auto px-0.5 sm:px-3 md:px-0 mb-8 mt-5">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-9">
            {/* Bookdetails top part */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-5">
              <img
                src={thumb}
                className="px-20 sm:px-0 sm:col-span-2 lg:col-span-2"
                alt=""
              />
              <div className="mx-auto sm:col-span-3 lg:col-span-3">
                {/* Book title */}
                <h2 className="text-xl sm:text-2xl font-semibold text-primary">
                  {bookDetails.title[language]}
                </h2>

                <div>
                  {/* Writers */}
                  <div className="flex">
                    <div className="w-20">
                      {language == 0
                        ? "লেখকঃ"
                        : language == 2
                        ? "كاتب : "
                        : "Writer:"}
                    </div>
                    <div className="ml-5">
                      {writerDetails.map((wr) => (
                        <button
                          onClick={() => navigate(`/writers/${wr.writerId}`)}
                          key={wr.writerId}
                          className="hover:text-red"
                        >
                          {wr.name[language]} ,
                        </button>
                      ))}
                    </div>
                  </div>
                  {/* Translators */}
                  {translatorDetails.length > 0 && (
                    <div className="flex">
                      <div className="w-20">
                        {language == 0
                          ? "অনুবাদকঃ"
                          : language == 2
                          ? "مترجم: "
                          : "Translator:"}
                      </div>
                      <div className="ml-5">
                        {translatorDetails.map((tr) => (
                          <span key={tr.translatorId}>
                            {tr.name[language]} ,
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {/* Editors */}
                  {editorDetails.length > 0 && (
                    <div className="flex">
                      <div className="w-20">
                        {language == 0
                          ? "সম্পাদকঃ"
                          : language == 2
                          ? "محرر: "
                          : "Editor:"}
                      </div>
                      <div className="ml-5">
                        {editorDetails.map((ed) => (
                          <span key={ed.editorId}>{ed.name[language]} ,</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {/* Publishers */}
                  <div className="flex">
                    <div className="w-20">
                      {language == 0
                        ? "প্রকাশকঃ"
                        : language == 2
                        ? "الناشر : "
                        : "Publisher:"}
                    </div>
                    <div className="ml-5">
                      {publisherDetails[0]?.name[language]}
                    </div>
                  </div>
                  {/* Categories */}
                  <div className="flex">
                    <div className="w-20">
                      {language == 0
                        ? "বিষয়ঃ"
                        : language == 2
                        ? "الصنف : "
                        : "Category:"}
                    </div>
                    <div className="ml-5">
                      <Link
                        to={`/categories/${category}`}
                        className="font-medium hover:text-red"
                      >
                        {categoryDetails[0]?.name[language]}
                      </Link>
                    </div>
                  </div>
                  {/* SubCategories */}
                  <div className="flex">
                    <div className="w-20">
                      {language == 0
                        ? "উপ বিষয়ঃ"
                        : language == 2
                        ? "تصنيف فرعي : "
                        : "Sub Category:"}
                    </div>
                    <div className="ml-5">
                      <Link to="" className="font-medium hover:text-red">
                        {subCategoryDetails[0]?.name[language]}
                      </Link>
                    </div>
                  </div>
                  {/* Price */}
                  <div className="flex">
                    <div className="w-20">
                      {language == 0
                        ? "দামঃ "
                        : language == 2
                        ? "مخزون : "
                        : "Price :"}
                    </div>
                    <div className="ml-5">{price}</div>
                  </div>
                  {/* Stock */}
                  {status === "published" && (
                    <div className="flex">
                      <div className="w-20">
                        {language == 0
                          ? "স্টকঃ "
                          : language == 2
                          ? "مخزون : "
                          : "Stock :"}
                      </div>
                      <div className="ml-5">{stock}</div>
                    </div>
                  )}
                  {/* If ststus upcoming then remove Add to cart btn */}
                  <div>
                    {status === "upcoming" ? (
                      <>
                        <button className="py-2 px-12 bg-slate-700 text-white text-lg mt-3">
                          {language == 0
                            ? "আপকামিং"
                            : language == 2
                            ? "القادمة"
                            : "Upcoming"}
                        </button>
                      </>
                    ) : stock == 0 ? (
                      <>
                        <button className="py-2 px-12 bg-slate-700 text-white text-lg mt-3">
                          {language == 0
                            ? "ষ্টক আউট"
                            : language == 2
                            ? "المخزن نفذ"
                            : "Stock Out"}
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => handleAddtoCart(bookDetails)}
                          className="bg-primary text-white py-2 px-12 border border-primary text-lg font-semibold hover:border-black hover:bg-transparent hover:text-black flex items-center justify-center mt-3"
                        >
                          {language == 0
                            ? "কার্টে যোগ করুন"
                            : language == 2
                            ? "أضف إلى السلة"
                            : "Add to cart"}
                        </button>
                      </>
                    )}
                  </div>
                </div>

                {/* stock  <>
                      
                    </> */}
              </div>
            </div>
            {/* Bookdetails bottom part */}
            {/* Show description */}
            {desc && (
              <>
                <p className="text-xl font-semibold border-b pb-1 mb-5 mt-10">
                  {language == 0
                    ? "সংক্ষিপ্ত বর্ণনা"
                    : language == 1
                    ? "Brief Description"
                    : language == 2
                    ? "وصف مختصر"
                    : "Brief Description"}
                </p>
                <p className="text-lg">{desc[language]}</p>
              </>
            )}
          </div>
          <div className="col-span-12 md:col-span-3 mr-auto md:ml-auto">
            <RelatedBooks bookCategory={category} bookId={_id}></RelatedBooks>
          </div>
        </div>
      </div>
    </section>
  );
}