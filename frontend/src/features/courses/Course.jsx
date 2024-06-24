import { Link } from "react-router-dom";
import StarsBox from "../../ui/StarsBox";

function Course({ course }) {
  const {
    title,
    course_id,
    price,
    rating,
    thumbnail_url,
    instructor: { name },
  } = course;
  const urlImageCourse =
    thumbnail_url ||
    "https://i.ytimg.com/vi/CScxy0294SE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDx1G4hpKwdqiy94l6vZlUD1jmMRQ.jpg";


  return (
    <Link
      to={course_id}
      className=" h-screen p-4 text-neutral-900 cursor-pointer"
    >
      <div className="p-4 bg-white max-w-[275px] rounded-md shadow-md text-sm">
        <div className="w-full rounded-md h-[160px] mb-3">
          <img className="w-full h-full" src={urlImageCourse} alt="course" />
        </div>
        <h2 className="font-medium text-sm h-12">{title}</h2>
        <span className="text-violet-700 text-sm font-medium block mb-2">{name}</span>
        <div className="flex items-center">
          <StarsBox size={23} />
          <sub className="ml-2 font-bold mt-1 self-start text-neutral-500">
            {rating}
          </sub>
          <p className="ml-auto pr-2 font-bold">${price}</p>
        </div>
      </div>
    </Link>
  );
}

export default Course;
