import { useSelector } from "react-redux";
import { getCourseById } from "../../../store/slices/courseSlice";
import { useParams } from "react-router-dom";
import Button from "../../../ui/button/Button";
import cutString from "../../../utls/cutString";
import SectionMain from "../../../ui/layout/SectionMain";
import StaticBoards from "../StaticBoards/StaticBoards";
import Accordion from "../../CourseContent/Accordion/Accordion";
import { IoIosAddCircleOutline } from "react-icons/io";
// import Card from "../../CourseContent/CourseCard/Card";

function CourseEditor() {
  const { course: courseId } = useParams();
  const course = useSelector(getCourseById(courseId));
  const {
    title,
    description,
    thumbnail_url,
    // price,
    // category,
    duration,
    content,
  } = course;
  const totalVideo = content
    .map((content) => content.lectures)
    .reduce((pre, cur) => pre.length + cur.length);

  return (
    <SectionMain>
      <div className="flex mx-auto gap-4 mb-8 rounded-md shadow-md p-6 border-[2px]">
        <div className="w-[40%] bg-black self-stretch flex items-center">
          <img src={thumbnail_url} alt="Shoes" className="w-full" />
        </div>
        <div className="flex flex-col w-[60%]">
          <div className="space-y-3">
            <h1 className="text-3xl font-medium">{title}</h1>
            <p className="text-neutral-800">
              {cutString(
                description +
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum necessitatibus possimus eligendi a, provident nisi aut. Pariatur sunt consectetur eum veritatis sapiente vel eius necessitatibus. Aspernatur tenetur rerum labore ipsum dolore, ea incidunt voluptas dignissimos, nam sunt culpa nesciunt rem ipsam adipisci nobis ullam aperiam magni, quis aut eius porro.",
                150
              )}
            </p>
            <ul className=" space-y-1 text-neutral-600 list-disc pl-5">
              <li className="">Số lượng: {totalVideo} video</li>
              <li className="">Tổng thời gian: {duration.split(" ")[0]} giờ</li>
              <li className="">Tài liệu lý thuyết: 4</li>
              <li className="">Đánh giá: 4.5</li>
            </ul>
          </div>
          <div className="mt-auto self-end">
            <Button custom="rounded-sm">Cập nhật</Button>
          </div>
        </div>
      </div>
      <section className="grid grid-cols-1 gap-8">
        <StaticBoards />
        <div className="flex gap-8">
          <div className="w-1/2">
            <div className="flex justify-between items-center py-4 px-2">
              <h2 className="text-neutral-800 font-semibold text-xl">
                Nội dung khóa học
              </h2>
              <button className="px-8 py-1 border-dashed border-slate-400 border-2 rounded-md  transition-all duration-500 hover:border-solid">
                <IoIosAddCircleOutline size={24} className="text-slate-400" />
              </button>
            </div>
            <Accordion param="course" customClass="removeAfterClass" />
          </div>
          <div className="w-1/2 overflow-y-scroll h-[50rem] px-2 space-y-4">
            <video
              className="w-full h-96 bg-black rounded-md"
              src="https://youtu.be/K9_VFxzCuQ0?si=HXe1slqRK-j-izQQ"
              controls
              autoPlay
            >
              <source src="" type="video/mp4" />
            </video>
            <h3 className="text-xl text-black font-medium">Bài giảng: Setting up Python</h3>
          </div>
        </div>
      </section>
    </SectionMain>
  );
}

export default CourseEditor;
