import { useEffect } from "react";
import Course from "./Course";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseData } from "../../store/slices/courseSlice";
import Heading from "../../ui/Heading";
import CustomSlider from "../../components/CustomSilde/CustomSlider";

function CourseLists({ title = "Khóa học nổi bật", linkUrl = "" }) {
  const { courses, status } = useSelector((state) => state.courses);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCourseData());
  }, [dispatch]);



  if (status === "Loading" || status === "idle") return <div>Loading</div>;

  return (
    <div className="py-4">
      <Heading custom="px-4 text-3xl font-bold">{title}</Heading>

      <CustomSlider>
        {courses.map((course) => (
          <Course key={course.course_id} course={course} linkUrl={linkUrl} />
        ))}
      </CustomSlider>
    </div>
  );
}

export default CourseLists;
