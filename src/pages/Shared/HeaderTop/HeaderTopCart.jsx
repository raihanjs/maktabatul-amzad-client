import { Link } from "react-router-dom";
import { BsCartCheckFill } from "react-icons/bs";

export default function HeaderTopCart() {
  return (
    <div>
      <Link to="/cartdetails" className="flex items-center">
        <BsCartCheckFill className="text-md mr-1 -mt-1" />
        Cart (<span className="text-[#f0141e]">0 item</span>)
      </Link>
    </div>
  );
}
