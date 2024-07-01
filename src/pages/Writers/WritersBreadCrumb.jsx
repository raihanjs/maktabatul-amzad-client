import { Link } from "react-router-dom";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

export default function WritersBreadCrumb() {
  return (
    <div className="border-b border-primary mb-5 mx-2 md:mx-0">
      <div className="flex justify-between items-center">
        <h3 className="text-xs md:text-md lg:text-xl font-semibold text-primary capitalize">
          সকল লেখক
        </h3>

        <div className="flex items-center">
          <Link to="/" className="text-primary text-xs md:text-md">
            হোম
          </Link>
          <LiaLongArrowAltRightSolid className="mx-2" />
          <span className="capitalize text-xs md:text-md">সকল লেখক</span>
        </div>
      </div>
    </div>
  );
}
