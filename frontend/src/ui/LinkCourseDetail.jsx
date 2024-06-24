import { NavLink } from "react-router-dom";

function LinkCourseDetail({ to = "", children, isActive = false  }) {
  const styles = "pb-3 border-b-[3px] border-b-transparent hover:border-b-green-600 cursor-pointer transition-all duration-300 px-5 flex items-center text-lg font-medium text-neutral-500"

  if(!to.length) {
    return  <li className={styles}>{children}</li>
  }

  return (
    <li className="linkVideo">
      <NavLink to={to} replace={false} end={true} className={`${styles} ${isActive ? "active" : ""}`}>
        {children}
      </NavLink>
    </li>
  );
}

export default LinkCourseDetail;
