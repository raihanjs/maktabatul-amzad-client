import { useLoaderData } from "react-router-dom";
import WriterBreadCrumb from "./WriterBreadCrumb";

export default function Writer() {
  const writer = useLoaderData();

  return (
    <section className="my-12">
      <div className="container">
        <WriterBreadCrumb writerName={writer?.name} />

        <div className="my-5 md:grid grid-cols-12 gap-5">
          <img src={writer?.image} className="col-span-2" alt="" />
          <div className="col-span-10">
            <p className="font-semibold text-gray mb-3">
              <small>লেখকের জীবনী</small>
            </p>
            <p className="col-span-10">{writer?.desc[0]}</p>
          </div>
        </div>
      </div>
    </section>
  );
}