import { BsFillTelephoneFill, BsEnvelopeFill } from "react-icons/bs";

export default function HeaderTopContact() {
  return (
    <>
      <div className="hidden sm:flex items-center space-x-4">
        {/* Link Item */}
        <a href="tel:+880145544744484" className="flex items-center">
          <BsFillTelephoneFill className="text-md mr-1" /> (880) 145544744484
        </a>
        {/* Link Item */}
        <a href="mailto:amjad@gmail.com" className="flex items-center">
          <BsEnvelopeFill className="text-md mr-1" /> amjad@gmail.com
        </a>
      </div>
    </>
  );
}
