import { Link } from "react-router-dom";
import StarsBox from "../../ui/StarsBox";

function Course({
  course,
  linkUrl = "",
  children,
  width = "max-w-[18rem] w-[16rem]",
  height = "",
  custom = "",
}) {
  const {
    title,
    course_id,
    price,
    rating,
    thumbnail_url,
    instructor: { name },
    padding = "",
  } = course;
  const urlImageCourse =
    thumbnail_url ||
    "https://i.ytimg.com/vi/CScxy0294SE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDx1G4hpKwdqiy94l6vZlUD1jmMRQ.jpg";

  return (
    <Link
      to={`${linkUrl}${course_id}`}
      className={`${padding} text-neutral-900 cursor-pointer py-5`}
    >
      <div
        className={`bg-white ${width} ${height} ${custom} min-w-52 rounded-md space-y-1`}
      >
        <div className="w-full rounded-md h-[160px] mb-3">
          <img className="w-full h-full" src={urlImageCourse} alt="course" />
        </div>
        <h2 className="font-medium text-lg leading-6">{title}</h2>
        <span className="text-violet-700 text-sm font-normal block mb-2">
          {name}
        </span>
        <div className="flex items-center gap-2">
          <span className="font-bold self-start text-neutral-500">
            {rating}
          </span>
          <StarsBox size={14} spacing="gap-1" />
        </div>
        <p className="ml-auto pr-2 font-semibold">
          <u>đ</u> {price}
        </p>
        {children}
      </div>
    </Link>
  );
}

export default Course;
