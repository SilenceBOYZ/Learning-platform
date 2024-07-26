import Banner from "../ui/banner/Banner";
import CatergoryNavBar from "../ui/layout/CatergoryNavBar";
import SectionMain from "../ui/layout/SectionMain";

function CatergoriesPage() {
  return (
    <SectionMain>
      <div className="space-y-6">
        <CatergoryNavBar />
        <Banner />
      </div>
    </SectionMain>
  );
}

export default CatergoriesPage;
