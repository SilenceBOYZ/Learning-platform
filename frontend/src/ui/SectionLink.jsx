import { Link } from "react-router-dom";

function SectionLink({ children, lastChild = false, to = "" }) {
  if (!to.length)
    return (
      <li className="text-neutral-500 font-medium ">
        <Link className="w-full " to={to}>
          {children}
        </Link>
        {!lastChild ? <span className="ml-2">\</span> : ""}
      </li>
    );

  return (
    <li className="text-violet-700 font-medium ">
      <Link className="w-full " to={to}>
        {children}
      </Link>
      {!lastChild ? <span className="ml-2">\</span> : ""}
    </li>
  );
}

export default SectionLink;
