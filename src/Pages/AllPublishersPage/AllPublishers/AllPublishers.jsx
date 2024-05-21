import PageTitle from "../../../Components/PageTitle/PageTitle";
import { Helmet } from "react-helmet-async";
import usePublishers from "../../../hooks/usePublishers";
import Publisher from "../Publisher/Publisher";

export default function AllPublishers() {
  const [publishers, isLoading] = usePublishers();
  return (
    <section className="container">
      <Helmet>
        <title>Maktabatul Amzad - Writers</title>
      </Helmet>
      <PageTitle title={["সকল প্রকাশক", "All Publishers", "جميع الناشرين"]} />

      {/* Publisher Container */}
      <div className="flex flex-wrap justify-center">
        {isLoading ? (
          <>Loading .....</>
        ) : (
          <>
            {publishers.map((publisher) => (
              <Publisher
                publisher={publisher}
                key={publisher.publisherId}
              ></Publisher>
            ))}
          </>
        )}
      </div>
    </section>
  );
}
