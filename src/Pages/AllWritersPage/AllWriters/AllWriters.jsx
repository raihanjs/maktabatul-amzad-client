import { useContext } from "react";
import { ThemeContext } from "../../../Providers/ThemeProvider";
import { Link } from "react-router-dom";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import useWriters from "../../../hooks/useWriters";
import Writer from "../Writer/Writer";

export default function AllWriters() {
  const [writers, isLoading] = useWriters();
  const { language } = useContext(ThemeContext);
  return (
    <section className="container">
      {/* Section title and breadcrumb */}
      <div className="border-b border-primary mt-5">
        <div className="flex justify-between items-center">
          {/* Title */}
          <p className="text-xl font-semibold text-primary">
            {language === 0
              ? "সকল লেখক"
              : language === 2
              ? "جميع الكتاب"
              : "All Writers"}
          </p>
          {/* Breadcrumb */}
          <div className="flex items-center">
            <Link to="/" className="text-primary">
              {language === 0 ? "হোম" : language === 2 ? "بيت" : "Home"}
            </Link>
            <LiaLongArrowAltRightSolid className="mx-2" />
            <span>
              {language === 0
                ? "সকল লেখক"
                : language === 2
                ? "جميع الكتاب"
                : "All Writers"}
            </span>
          </div>
        </div>
      </div>

      {/* Writers Container */}
      <div className="grid grid-cols-6 gap-10 my-10">
        {isLoading ? (
          <>Loading .....</>
        ) : (
          <>
            {writers.map((writer) => (
              <Writer
                writer={writer}
                key={writer.writerId}
                language={language}
              ></Writer>
            ))}
          </>
        )}
      </div>
    </section>
  );
}
