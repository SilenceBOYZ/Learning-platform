import Button from "../../ui/button/Button";
import Heading from "../../ui/Heading";
// import CreateCourseForm from "../Form/CreateCourseForm";
import { HiOutlinePlusCircle } from "react-icons/hi";

import LecturerCourse from "./LecturerCourse";
import LecturerCourseList from "./LecturerCourseList";
import Banner from "../../ui/banner/Banner";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCourseData } from "../../store/slices/courseSlice";

function LecturerCourseSystem() {
  //tailwindCss Gradient code: from-cyan-500 to-blue-500
  const { courses, status } = useSelector((store) => store.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourseData());
  }, [dispatch]);

  return (
    <>
      <Banner
        title="Chào mừng giảng viên"
        desc="Chào mừng giảng viên T-Learning, mong bạn sẽ mang đến những khóa học thật chất lượng và mang lại nhiều giá trị cho học viên của T-learning."
        btnTitle="Tạo khóa học ngay"
      />

      <section className="flex mt-6 gap-4 m-h-dvh py-4">
        <div className="w-full">
          <div className="flex items-center gap-4 justify-between mb-4">
            <Heading custom="text-2xl">Khóa học của bạn</Heading>
            <Button custom="rounded-sm" btnColor="bg-violet-600">
              Tạo khóa học mới
            </Button>
          </div>

          {status === "Success" ? (
            !courses.length ? (
              <div className="flex w-full justify-center items-center h-[20rem]">
                <HiOutlinePlusCircle size={78} className="cursor-pointer" />
              </div>
            ) : (
              <LecturerCourseList>
                {courses.map((course, index) => {
                  if(index < 5) 
                  return <LecturerCourse key={course.course_id} course={course}/>
                }
                )}
              </LecturerCourseList>
            )
          ) : (
            <div>Loading</div>
          )}

          {/* <CreateCourseForm /> */}
        </div>
      </section>
    </>
  );
}

export default LecturerCourseSystem;
