import useWriters from "../../../hooks/useWriters";
import Writer from "../Writer/Writer";
import PageTitle from "../../../Components/PageTitle/PageTitle";

export default function AllWriters() {
  const [writers, isLoading] = useWriters();
  return (
    <section className="container">
      <PageTitle title={["সকল লেখক", "All Writers", "جميع الكتاب"]} />

      {/* Writers Container */}
      <div className="grid grid-cols-6 gap-10 my-10">
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