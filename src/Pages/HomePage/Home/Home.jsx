import React, { useContext } from "react";
import HomeBanner from "../HomeBanner/HomeBanner";
import SideNav from "../../../Components/SideNav/SideNav";
import useBooks from "../../../hooks/useBooks";
import BookCard from "../../Shared/BookCard/BookCard";
import { ThemeContext } from "../../../Providers/ThemeProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import HomeOurBooks from "../HomeOurBooks/HomeOurBooks";
import HomeCategories from "../HomeCategories/HomeCategories";
import HomeWriters from "../HomeWriters/HomeWriters";
import HomePublishers from "../HomePublishers/HomePublishers";
import HomeBestSeller from "../HomeBestSeller/HomeBestSeller";
import HomeRcentlySold from "../HomeRcentlySold/HomeRcentlySold";

export default function Home() {
  const { language } = useContext(ThemeContext);
  const [books, isLoading] = useBooks();
  return (
    <div>
      <Helmet>
        <title>Maktabatul Amzad - Home</title>
      </Helmet>
      <HomeBanner />
      <HomeOurBooks />
      <HomeCategories />
      <HomeWriters />
      <HomeRcentlySold />
      <HomePublishers />
      <HomeBestSeller />
      <div className="container px-2 md:px-0">
        <div className="grid grid-cols-12">
          <div className="hidden md:block md:col-span-4 xl:col-span-3 xxl:col-span-2">
            <SideNav></SideNav>
          </div>
          <div className="col-span-12 md:col-span-8 xl:col-span-9 xxl:col-span-10">
            <div className="flex justify-between items-center mb-3">
              <h2 className="ml-5 text-xl font-bold">Our Books</h2>
              <Link to="/books" className="hover:text-primary">
                See All
              </Link>
            </div>
            <div className="flex justify-center flex-wrap">
              {isLoading ? (
                <>
                  <p className="text-center mt-20">Loading Books ...</p>
                </>
              ) : (
                <>
                  {books.map((book) => (
                    <BookCard key={book._id} book={book}></BookCard>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
