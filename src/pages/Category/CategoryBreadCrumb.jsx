import { Link } from "react-router-dom";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

export default function CategoryBreadCrumb({ categoryName }) {
  return (
    <div className="border-b border-primary mb-5 mx-2 md:mx-0">
      <div className="flex justify-between items-center">
        <h3 className="text-xs md:text-md lg:text-xl font-semibold text-primary capitalize">
          {categoryName[0]}
        </h3>

        <div className="flex items-center">
          <Link to="/" className="text-primary text-xs md:text-md">
            হোম
          </Link>
          <LiaLongArrowAltRightSolid className="mx-2" />
          <Link to="/categories" className="text-primary text-xs md:text-md">
            সকল ক্যাটেগরি
          </Link>
          <LiaLongArrowAltRightSolid className="mx-2" />
          <span className="capitalize text-xs md:text-md">
            {categoryName[0]}
          </span>
        </div>
      </div>
    </div>
  );
}
