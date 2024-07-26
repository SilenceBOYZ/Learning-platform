import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCourseData } from "../../store/slices/courseSlice";
import Course from "./Course";
import Select from "../../ui/controlComponent/Select";
import Option from "../../ui/controlComponent/Option";

function Courses() {
  const { courses, status } = useSelector((state) => state.courses);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourseData());
  }, [dispatch]);

  if (status === "Loading" || status === "idle") return <div>Loading</div>;

  return (
    <>
      <div className="px-2 flex gap-4 items-center">
        <Select width="max-w-60 w-full">
          <Option value={"ALL"}>Tất cả</Option>
          <Option value={"increase"}>Sắp xếp từ A đến Z</Option>
          <Option value={"decrease"}>Sắp xếp từ Z đến A</Option>
        </Select>

        <Select width="max-w-60 w-full">
          <Option value={"ALL"}>Giảng viên</Option>
          <Option value={"Thanh Trí"}>Thanh Trí</Option>
          <Option value={"Công Đức"}>Công Đức</Option>
        </Select>
      </div>

      <div className="flex flex-wrap gap-8">
        {courses.map((course) => (
          <Course
            key={course.course_id}
            course={course}
            linkUrl={"../learning/"}
          />
        ))}
      </div>
    </>
  );
}

export default Courses;
