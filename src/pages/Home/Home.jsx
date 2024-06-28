import "react-multi-carousel/lib/styles.css";
import Hero from "./Hero";
import AmzadBooks from "./AmzadBooks";
import HomeCategories from "./HomeCategories";

export default function Home() {
  return (
    <>
      <Hero />
      <AmzadBooks />
      <HomeCategories />
    </>
  );
}
