import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleBook = () => {
  const book = useLoaderData();
  const { title, thumb, writer } = book;

  return (
    <section className="mb-12">
      <div className="container mx-auto px-0.5  sm:px-3 md:px-0">
        <div className="flex">
          <div>
            <img src={`${thumb}`} alt={`${title}`} />
          </div>
          <div className="pl-8">
            <h2 className="text-2xl font-semibold uppercase mb-1">
              {title[1]}
            </h2>
            <h4 className="text-lg font-semibold text-black">{writer[0][1]}</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBook;
