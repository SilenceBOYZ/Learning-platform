import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCourseData } from "../../store/slices/courseSlice";
import Course from "../courses/Course";

function WishList() {
  const { courses, status } = useSelector((state) => state.courses);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourseData());
  }, [dispatch]);

  if (status === "Loading" || status === "idle") return <div>Loading</div>;

  return (
    <div className="flex flex-wrap gap-8">
      {courses.map((course) => (
        <Course
          key={course.course_id}
          course={course}
          linkUrl={"../learning/"}
        />
      ))}
    </div>
  );
}

export default WishList;
