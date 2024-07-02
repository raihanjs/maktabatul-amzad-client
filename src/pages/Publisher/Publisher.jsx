import { useLoaderData } from "react-router-dom";
import PublisherBreadCrumb from "./PublisherBreadCrumb";
import BookCard from "../../components/BookCard";

export default function Publisher() {
  const publisher = useLoaderData();
  return (
    <section className="my-12">
      <div className="container">
        <PublisherBreadCrumb publisherName={publisher?.name} />

        <div className="flex flex-col items-center">
          <img src={publisher?.image} className="w-80" alt="" />

          <div className="my-10">
            <p className="text-md font-bold text-primary">
              {publisher?.name[0]}এর বইসমুহ
            </p>
            <div className="flex flex-wrap justify-center">
              <BookCard margin="m-2" />
              <BookCard margin="m-2" />
              <BookCard margin="m-2" />
              <BookCard margin="m-2" />
              <BookCard margin="m-2" />
              <BookCard margin="m-2" />
              <BookCard margin="m-2" />
              <BookCard margin="m-2" />
              <BookCard margin="m-2" />
              <BookCard margin="m-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
