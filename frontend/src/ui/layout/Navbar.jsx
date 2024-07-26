import { Link } from "react-router-dom";
import { AiOutlineSlack } from "react-icons/ai";
import { FaHouseUser, FaBookOpen, FaUserGraduate } from "react-icons/fa";

import LinkItem from "../LinkItem";

function Navbar() {
  return (
    <nav className="fixed z-50 h-full text-family-freeman text-neutral-800 p-6 box-border flex flex-col items-center bg-transparent">
      <Link
        className="flex items-center gap-2 cursor-pointer text-violet-700 mb-10"
        to={"/"}
      >
        <AiOutlineSlack size={48} />
      </Link>
      <ul className="space-y-2">
        <LinkItem to="/">
          <FaBookOpen size={24} />
        </LinkItem>
        <LinkItem to="/my-course">
          <FaHouseUser size={24} />
        </LinkItem>
        <LinkItem to="/lecturer">
          <FaUserGraduate size={24} />
        </LinkItem>
      </ul>
    </nav>
  );
}

export default Navbar;
