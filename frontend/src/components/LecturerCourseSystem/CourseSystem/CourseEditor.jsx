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
    <div className="card rounded-md w-80 bg-base-100 shadow-xl absolute right-20 top-28 z-20">
      <figure className="p-4">
        <img src={thumbnail_url} alt="Shoes" />
      </figure>
      <div className="card-body px-4 pb-4 pt-0 gap-0 space-y-0">
        <h2 className="card-title text-neutral-500 text-lg font-bold">
          Học phí
        </h2>
        <p className="font-bold text-2xl mt-0 mb-[10px_!important] text-green-600">
          {price} đ
        </p>
        <ul className="font-semibold space-y-1 mb-[20px_!important] text-neutral-500">
          <li className="flex items-center gap-2">
            <HiOutlineCheck /> Khóa học bao gồm:
          </li>
          <li className="flex items-center gap-2">
            <HiOutlineCheck /> Số lượng: {totalVideo} video
          </li>
          <li className="flex items-center gap-2">
            <HiOutlineCheck /> Tổng thời gian: {duration.split(" ")[0]} giờ
          </li>
          <li className="flex items-center gap-2">
            <HiOutlineCheck /> Tài liệu lý thuyết: 4
          </li>
        </ul>
        <div className="card-actions justify-center">
          <Button>Buy now</Button>
        </div>
      </div>
    </div>
  );
}

export default CourseEditor;
