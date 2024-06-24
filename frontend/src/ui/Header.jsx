import { FaSearch } from "react-icons/fa";
import {
  IoSunnyOutline,
  IoSunnySharp,
  IoNotificationsSharp,
} from "react-icons/io5";

import { HiEnvelope } from "react-icons/hi2";

function Header() {
  const check = true;

  return (
    <header className="w-full flex items-center p-4 py-4 justify-between bg-white">
      <div className="w-[40%]">
        <label className="input input-bordered flex items-center gap-2 h-10 w-full border-2 py-6">
          <input type="text" className="grow " placeholder="Search" />
          <FaSearch className="cursor-pointer" />
        </label>
      </div>

      <div className="w-[60%] flex justify-end gap-4 items-center">
        <div>
          <HiEnvelope className="cursor-pointer" size={24} />
        </div>
        <div>
          <IoNotificationsSharp className="cursor-pointer" size={24} />
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
