import SectionMain from "../../ui/SectionMain";
import SectionLink from "../../ui/SectionLink";
import LinkCourseDetail from "../../ui/LinkCourseDetail";
import Banner from "../../components/CourseContent/CourseBanner/Banner";
import Card from "../../components/CourseContent/CourseCard/Card";
import { Outlet, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCourseById } from "../../store/slices/courseSlice";

function CourseDetail() {
  const { id } = useParams();
  const course = useSelector(getCourseById(id));
  const { title } = course;

  return (
    <SectionMain>
      <nav>
        <ul className="flex gap-2 items-center mb-4">
          <SectionLink to="/">Trang chủ</SectionLink>
          <SectionLink to="/courses">Khóa học</SectionLink>
          <SectionLink lastChild={true}>{title}</SectionLink>
        </ul>
      </nav>

      <div className="h-full relative">
        <Banner />
        <Card />
        <section className="px-10 py-4 max-w-[70%]">
          <ul className="flex border-b-[1px] box-border pt-2">
            <LinkCourseDetail to="description">Mô tả khóa học</LinkCourseDetail>
            <LinkCourseDetail to="content">Nội dung Khóa học</LinkCourseDetail>
            <LinkCourseDetail to="lecture">Giảng viên</LinkCourseDetail>
          </ul>
          <Outlet />
        </section>
      </div>
    </SectionMain>
  );
}

export default CourseDetail;
