import { Outlet } from "react-router-dom";
import Banner from "../ui/banner/Banner";
import SearchInput from "../ui/controlComponent/SearchInput";
import UserPageLayout from "../ui/layout/UserPageLayout";
import LinkCourseDetail from "../ui/navCourse/LinkCourseDetail";
import List from "../ui/navCourse/List";
import SectionMain from "../ui/layout/SectionMain";

function UserCoursesPage() {
  return (
    <SectionMain >
      <Banner width="max-w-[85%]" custom="py-8 mx-auto px-4" />
      <UserPageLayout>
        <nav className="flex items-center justify-between ">
          <List custom="border-b-transparent">
            <LinkCourseDetail to="../my-course">
              Tất cả khóa học
            </LinkCourseDetail>
            <LinkCourseDetail to="wishlist">
              Danh sách yêu thích
            </LinkCourseDetail>
          </List>
          <SearchInput width="w-40%" />
        </nav>
        <Outlet />
      </UserPageLayout>
    </SectionMain>
  );
}

export default UserCoursesPage;
