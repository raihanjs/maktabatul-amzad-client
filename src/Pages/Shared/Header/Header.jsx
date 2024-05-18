import { Link } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";
import HeaderSearch from "./HeaderSearch";

const Header = () => {
  return (
    <header className="bg-[#108D41] py-2 sticky top-0 left-0 z-40">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="">
            <img
              src="https://i.ibb.co/0sPhz6P/logo.png"
              className="h-8 lg:h-10"
              alt=""
            />
          </Link>
          {/* Menubar */}
          <HeaderMenu />
          <HeaderSearch />
        </div>
      </div>
    </header>
  );
};

export default Header;
