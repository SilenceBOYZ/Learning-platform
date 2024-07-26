import { IoSunnyOutline, IoSunnySharp } from "react-icons/io5";

import {
  HiOutlineHeart,
  HiOutlineBell,
  HiOutlineShoppingCart,
} from "react-icons/hi2";
import SearchInput from "../controlComponent/SearchInput";
import { Link } from "react-router-dom";

function Header() {
  const check = true;

  return (
    <header className="w-full fixed top-0 z-30 flex items-center pr-4 py-4 pl-28 justify-between bg-white border-b-neutral-100 border-b-[1px]">
      <div className="w-[40%]">
        <SearchInput />
      </div>

      <div className="w-[60%] flex justify-end gap-6 items-center">
        <div>
          <HiOutlineHeart className="cursor-pointer" size={24} />
        </div>
        <Link className="relative" to="cart">
          <HiOutlineShoppingCart className="cursor-pointer" size={24} />
          <span className="flex absolute -right-4 -top-2.5 text-white bg-violet-700 w-6 h-6 rounded-full items-center justify-center">
            1
          </span>
        </Link>
        <div>
          <HiOutlineBell className="cursor-pointer" size={24} />
        </div>
        <div>
          {check ? (
            <IoSunnyOutline className="cursor-pointer" size={24} />
          ) : (
            <IoSunnySharp className="cursor-pointer" size={24} />
          )}
        </div>
        <div className="w-12 h-12 rounded-full bg-violet-400">
          <img src="" alt="" className="w-full" />
        </div>
      </div>
    </header>
  );
}

export default Header;
