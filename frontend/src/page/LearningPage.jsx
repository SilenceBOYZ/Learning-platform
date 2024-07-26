// import VideoPlayer from "../features/videoPlayer/VideoPlayer";

import { AiOutlineSlack } from "react-icons/ai";
import { HiArrowRight, HiBars4 } from "react-icons/hi2";

import { Link, Outlet, useParams } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCourseData } from "../store/slices/courseSlice";
import Section from "../features/learning/Section/Section";
import Button from "../ui/button/Button";

function LearningPage() {
  const { id } = useParams();
  const courses = useSelector((store) => store.courses);
  const dispatch = useDispatch();
  const [openList, setOpenList] = useState(false);

  function handleSetOpenList() {
    setOpenList((openList) => !openList);
  }

  useEffect(
    function () {
      dispatch(fetchCourseData());
    },
    [dispatch]
  );

  // console.log(courses);

  if (courses.status === "Loading" || courses.status === "idle") {
    return <div>Loading</div>;
  }

  const course = courses.courses.find((course) => course.course_id === id);
  const { content: section } = course;

  return (
    <>
      <header className="w-full z-[1000] bg-black fixed top-0 left-0 text-white flex justify-between items-center box-border py-2 px-6">
        <div className="flex gap-2 items-center">
          <Link to={"/"}>
            <FiChevronLeft size={28} />
          </Link>
          <Link
            className="flex items-center gap-2 cursor-pointer text-violet-700"
            to={"/"}
          >
            <AiOutlineSlack size={48} />
          </Link>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="w-10 h-10 bg-black relative flex items-center justify-center">
            <div
              className="absolute w-9 h-9 
             bg-orange-600 rounded-full
             left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] 
             "
            ></div>
            <div
              className="absolute w-9 h-9 
             bg-orange-600 rounded-full
             left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] 
             "
            ></div>
            <span className="text-[12px] font-medium z-50">78%</span>
          </div>
          <h4>Tiến độ</h4>
        </div>
      </header>
      <main className={`h-dvh fixed ${!openList ? "w-full" : "w-[75%]"} `}>
        <Outlet />
      </main>
      {!openList ? null : (
        <nav className="bg-white h-dvh fixed w-[25%] right-0 top-0 border-l-2">
          <div className="h-dvh mt-16 overflow-y-scroll">
            <h2 className="w-full px-4 py-3 bg-slate-300 font-bold">
              Nội dung khóa học
            </h2>
            <ul className="overflow-y-scroll ">
              {section.map((lecture) => (
                <Section key={lecture.section_title} lecture={lecture} />
              ))}
            </ul>
          </div>
        </nav>
      )}
      <footer className="w-full fixed bottom-0 flex bg-neutral-100 py-3 px-3 justify-center items-center">
        <div className="flex gap-4 ">
          <Button
            btnColor="bg-white"
            textColor="text-black"
            custom="border-2"
            padding="py-1 px-4"
          >
            Bài tiếp trước
          </Button>
          <Button padding="py-1 px-4">Bài tiếp theo</Button>
        </div>
        <button
          onClick={() => handleSetOpenList()}
          className="fixed right-5 bottom-4 font-medium text-black flex items-center gap-4"
        >
          <span>3. Xây dựng web</span>
          <div className="rounded-full bg-white p-2 border-[1px]">
            {!openList ? <HiBars4 /> : <HiArrowRight />}
          </div>
        </button>
      </footer>
    </>
  );
}

export default LearningPage;
