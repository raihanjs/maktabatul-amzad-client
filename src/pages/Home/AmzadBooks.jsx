import Carousel from "react-multi-carousel";
import BookCard, { BookCardSkeletion } from "../../components/BookCard";

export default function AmzadBooks() {
  const responsive = {
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
      items: 7,
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
      items: 4,
    },
    five: {
      breakpoint: {
        max: 767,
        min: 500,
      },
      items: 3,
    },
    six: {
      breakpoint: {
        max: 499,
        min: 320,
      },
      items: 2,
    },
  };

  let loading = false;

  if (loading)
    return (
      <section className="bg-emerald-50 mb-5 md:mb-10 py-12">
        <div className="container">
          <div className="animate-pulse">
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-2 h-2 bg-slate-200 rounded mb-2"></div>
              <div className="col-span-9 h-2 rounded mb-2"></div>
              <div className="col-span-1 h-8 bg-slate-200 rounded mb-2"></div>
            </div>
          </div>
          <Carousel arrows={false} responsive={responsive}>
            <BookCardSkeletion />
            <BookCardSkeletion />
            <BookCardSkeletion />
            <BookCardSkeletion />
            <BookCardSkeletion />
            <BookCardSkeletion />
            <BookCardSkeletion />
            <BookCardSkeletion />
            <BookCardSkeletion />
            <BookCardSkeletion />
            <BookCardSkeletion />
          </Carousel>
        </div>
      </section>
    );

  return (
    <section className="bg-emerald-50 mb-5 md:mb-10 py-12">
      <div className="container">
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-xl font-medium mb-3">মাকতাবাতুল আমজাদ</h3>
          <button className="py-1 px-3 border border-primary hover:bg-primary hover:text-white">
            See All
          </button>
        </div>
        <Carousel autoPlay autoPlaySpeed={2000} responsive={responsive}>
          <BookCard margin="mx-auto" />
          <BookCard margin="mx-auto" />
          <BookCard margin="mx-auto" />
          <BookCard margin="mx-auto" />
          <BookCard margin="mx-auto" />
          <BookCard margin="mx-auto" />
          <BookCard margin="mx-auto" />
          <BookCard margin="mx-auto" />
          <BookCard margin="mx-auto" />
          <BookCard margin="mx-auto" />
          <BookCard margin="mx-auto" />
          <BookCard margin="mx-auto" />
        </Carousel>
      </div>
    </section>
  );
}
