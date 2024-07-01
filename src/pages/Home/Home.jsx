import "react-multi-carousel/lib/styles.css";
import Hero from "./Hero";
import AmzadBooks from "./AmzadBooks";
import HomeCategories from "./HomeCategories";
import HomeWriters from "./HomeWriters";
import HomeRecentSold from "./HomeRecentSold";
import HomePublishers from "./HomePublishers";
import HomeBestSeller from "./HomeBestSeller";
import BookCard from "../../components/BookCard";

export default function Home() {
  return (
    <>
      <Hero />
      <AmzadBooks />
      <HomeWriters />
      <HomeRecentSold />
      <HomeCategories />
      <HomeBestSeller />
      <HomePublishers />
    </>
  );
}
