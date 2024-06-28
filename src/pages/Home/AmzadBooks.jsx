import Carousel from "react-multi-carousel";
import BookCard from "../../components/BookCard";

export default function AmzadBooks() {
  return (
    <section className="bg-emerald-50 mb-5 md:mb-10 py-12">
      <div className="container">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-medium mb-3">মাকতাবাতুল আমজাদ</h3>
          <button className="py-1 px-3 border border-primary hover:bg-primary hover:text-white">
            See All
          </button>
        </div>
        <Carousel
          autoPlay
          autoPlaySpeed={2000}
          responsive={{
            one: {
              breakpoint: {
                max: 3000,
                min: 1536,
              },
              items: 9,
            },
            two: {
              breakpoint: {
                max: 1535,
                min: 1280,
              },
              items: 8,
            },
            three: {
              breakpoint: {
                max: 1279,
                min: 1024,
              },
              items: 6,
            },
            four: {
              breakpoint: {
                max: 1023,
                min: 768,
              },
              items: 5,
            },
            five: {
              breakpoint: {
                max: 767,
                min: 575,
              },
              items: 4,
            },
            six: {
              breakpoint: {
                max: 574,
                min: 500,
              },
              items: 3,
            },
            seven: {
              breakpoint: {
                max: 499,
                min: 320,
              },
              items: 2,
            },
          }}
        >
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
        </Carousel>
      </div>
    </section>
  );
}
