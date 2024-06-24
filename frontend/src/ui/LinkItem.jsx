import { NavLink } from "react-router-dom";

function LinkItem({ to, children }) {
  return (
    <li className="w-full rounded-sm overflow-hidden ">
      <NavLink
        className={
          "cursor-pointer w-full box-border py-3  text-lg text-neutral-600 font-bold hover:text-violet-700 border-b-4 border-b-white transition-all  linkItem flex gap-4 "
        }
        to={to}
      >
        {children}
      </NavLink>
    </li>
  );
}

export default LinkItem;
