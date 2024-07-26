import { useSelector } from "react-redux";
import Banner from "../../../ui/banner/Banner";
import { getCourseById } from "../../../store/slices/courseSlice";
import { useParams } from "react-router-dom";
import Button from "../../../ui/button/Button";
import Heading from "../../../ui/Heading";
import cutString from "../../../utls/cutString";
import { HiOutlineCheck } from "react-icons/hi2";
// import Card from "../../CourseContent/CourseCard/Card";

function CourseEditor() {
  const { course: courseId } = useParams();
  const course = useSelector(getCourseById(courseId));
  const {
    title,
    description,
    thumbnail_url,
    price,
    category,
    duration,
    content,
  } = course;
  const totalVideo = content
    .map((content) => content.lectures)
    .reduce((pre, cur) => pre.length + cur.length);

  return (
    <div className="flex gap-4">
      <figure className="">
        <img src={thumbnail_url} alt="Shoes" />
      </figure>
      <div className="flex flex-col">
        <div className="space-y-3">
          <h1 className="text-3xl font-medium">{title}</h1>
          <p className="">{description}</p>
          <ul className="font-semibold space-y-1 text-neutral-500 list-disc">
            <li className="flex items-center gap-2  ">
              Số lượng: {totalVideo} video
            </li>
            <li className="flex items-center gap-2">
              Tổng thời gian: {duration.split(" ")[0]} giờ
            </li>
            <li className="flex items-center gap-2">Tài liệu lý thuyết: 4</li>
            <li className="flex items-center gap-2">Đánh giá: 4.5</li>
          </ul>
        </div>
        <div className="mt-auto">
          <Button custom="rounded-sm">Cập nhật</Button>
        </div>
      </div>
    </div>
  );
}

export default CourseEditor;
