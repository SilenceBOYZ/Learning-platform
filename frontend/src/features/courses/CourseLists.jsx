import { useEffect } from "react";
import Course from "./Course";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseData } from "../../store/slices/courseSlice";

function CourseLists() {
  const { courses, status } = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourseData());
  }, [dispatch]);

  if (status === "Loading") return <div>Loading</div>;

  return (
    <div className="flex w-full bg-neutral-50">
      {courses.map(course => <Course key={course.course_id} course={course}/>)}
    </div>
  );
}

export default CourseLists;
