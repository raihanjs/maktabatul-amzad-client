import HeaderTopLanguage from "./HeaderTopLanguage";
import HeaderTopAccount from "./HeaderTopAccount";
import HeaderTopContact from "./HeaderTopContact";
import HeaderTopCart from "./HeaderTopCart";

export default function HeaderTop() {
  return (
    <div className="py-2 bg-black text-gray-300 text-sm fw-medium">
      <div className="container">
        <div className="flex items-center justify-center md:justify-between">
          <HeaderTopContact />
          <div className="flex items-center space-x-4">
            <HeaderTopCart />
            <HeaderTopLanguage />
            <HeaderTopAccount />
          </div>
        </div>
      </div>
    </div>
  );
}
