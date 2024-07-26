import CourseLists from "../features/courses/CourseLists";
import Banner from "../ui/banner/Banner";
import CatergoryNavBar from "../ui/layout/CatergoryNavBar";

function HomePage() {
  return (
    <section className="max-w-[90rem] mx-auto px-4 py-6 pb-12 space-y-6">
      <CatergoryNavBar />
      <Banner />
      <div className="space-y-2">
        <CourseLists title="Khóa học nổi bật" linkUrl="courses/" />        
        <CourseLists title="Khóa học giảm giá" linkUrl="courses/" />        
        <CourseLists title="Khóa học theo từng lĩnh vực" linkUrl="courses/" />        
      </div>
    </section>
  );
}

export default HomePage;
