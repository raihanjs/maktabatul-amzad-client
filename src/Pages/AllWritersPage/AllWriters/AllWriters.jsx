import useWriters from "../../../hooks/useWriters";
import Writer from "../Writer/Writer";
import PageTitle from "../../../Components/PageTitle/PageTitle";
import { Helmet } from "react-helmet-async";

export default function AllWriters() {
  const [writers, isLoading] = useWriters();
  return (
    <section className="container">
      <Helmet>
        <title>Maktabatul Amzad - Writers</title>
      </Helmet>
      <PageTitle title={["সকল লেখক", "All Writers", "جميع الكتاب"]} />

      {/* Writers Container */}
      <div className="flex flex-wrap justify-center">
        {isLoading ? (
          <>Loading .....</>
        ) : (
          <>
            {writers.map((writer) => (
              <Writer writer={writer} key={writer.writerId}></Writer>
            ))}
          </>
        )}
      </div>
    </section>
  );
}
