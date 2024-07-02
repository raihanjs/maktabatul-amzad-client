import { FaBook } from "react-icons/fa";
import usePublishers from "../../hooks/usePublishers";
import PublishersBreadCrumb from "./PublishersBreadCrumb";
import PublisherCard, {
  PublisherCardSkeletion,
} from "../../components/PublisherCard";

export default function Publishers() {
  const [publishers, isLoading] = usePublishers();
  if (isLoading)
    return (
      <section className="my-12">
        <div className="container">
          <div className="border-b border-primary pb-2 mb-5 flex justify-between animate-pulse">
            <div className="h-2 bg-slate-200 w-40"></div>
            <div className="flex space-x-2">
              <div className="h-2 bg-slate-200 w-10"></div>
              <div className="h-2 bg-slate-200 w-10"></div>
              <div className="h-2 bg-slate-200 w-10"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
            <PublisherCardSkeletion />
            <PublisherCardSkeletion />
            <PublisherCardSkeletion />
            <PublisherCardSkeletion />
            <PublisherCardSkeletion />
            <PublisherCardSkeletion />
            <PublisherCardSkeletion />
            <PublisherCardSkeletion />
            <PublisherCardSkeletion />
            <PublisherCardSkeletion />
            <PublisherCardSkeletion />
            <PublisherCardSkeletion />
            <PublisherCardSkeletion />
            <PublisherCardSkeletion />
            <PublisherCardSkeletion />
            <PublisherCardSkeletion />
            <PublisherCardSkeletion />
            <PublisherCardSkeletion />
            <PublisherCardSkeletion />
            <PublisherCardSkeletion />
            <PublisherCardSkeletion />
            <PublisherCardSkeletion />
            <PublisherCardSkeletion />
            <PublisherCardSkeletion />
            <PublisherCardSkeletion />
            <PublisherCardSkeletion />
            <PublisherCardSkeletion />
            <PublisherCardSkeletion />
            <PublisherCardSkeletion />
            <PublisherCardSkeletion />
          </div>
        </div>
      </section>
    );

  return (
    <section className="my-12">
      <div className="container">
        <PublishersBreadCrumb />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
          {publishers.map((publisher) => (
            <div key={publisher._id} className="mx-auto">
              <PublisherCard publisher={publisher} />
              <hr />
              <div className="flex items-center my-2">
                <FaBook className="text-red mr-2" />
                <p className="font-bold">Books: 1</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
