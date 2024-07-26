import SectionMain from "../../ui/layout/SectionMain";
import SectionLink from "../../ui/layout/SectionLink";
import LinkCourseDetail from "../../ui/navCourse/LinkCourseDetail";
import Banner from "../../components/CourseContent/CourseBanner/Banner";
import Card from "../../components/CourseContent/CourseCard/Card";
import { Outlet, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCourseById } from "../../store/slices/courseSlice";
import List from "../../ui/navCourse/List";

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
          <List>
            <LinkCourseDetail to="description">Mô tả khóa học</LinkCourseDetail>
            <LinkCourseDetail to="content">Nội dung Khóa học</LinkCourseDetail>
            <LinkCourseDetail to="lecture">Giảng viên</LinkCourseDetail>
          </List>
          <Outlet />
        </section>
      </div>
    </SectionMain>
  );
}

export default CourseDetail;
