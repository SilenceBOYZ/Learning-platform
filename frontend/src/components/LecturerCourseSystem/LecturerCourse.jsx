import { Link } from "react-router-dom";
import Heading from "../../ui/Heading";
import { HiCalendarDays, HiOutlinePencilSquare } from "react-icons/hi2";

function LecturerCourse({ course }) {
  // console.log(course);
  const desc =
    "Khóa học backend dành cho người mới bắt đầu làm quen với lập trình ";
  return (
    <Link
      to={course.course_id}
      className="bg-gradient-to-r w-full h-36 border grid grid-rows-1 grid-cols-[.5fr_1fr] rounded-md overflow-hidden cursor-pointer shadow-md hover:-translate-y-1 transition-all duration-300"
    >
      <div className="w-48 object-cover overflow-hidden">
        <img
          className="w-full"
          src="https://i.ytimg.com/vi/PuOVqP_cjkE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1SyzuNeo3mI2cF9wD58tmE1Keng.jpg"
        />
      </div>
      <div className="px-3 py-2 flex flex-col justify-between ">
        <div>
          <Heading custom="text-[1rem] font-medium text-violet-700 mb-1">
            Khóa học C# cơ bản
          </Heading>
          <p className="text-sm italic font-medium text-neutral-600 mb-3">
            {desc.substring(0, 80)}......
            <br />
          </p>
        </div>
        <div className="text-[0.75rem] italic flex gap-2 font-normal ">
          <span className="flex items-center gap-1">
            <HiCalendarDays size={18} />
            24/05/2024
          </span>
          <span className="flex items-center gap-1">
            <HiOutlinePencilSquare size={18} />
            16/07/2024
          </span>
        </div>
      </div>
    </Link>
  );
}

export default LecturerCourse;
