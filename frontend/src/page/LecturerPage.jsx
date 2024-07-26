import { Outlet } from "react-router-dom";
import SectionMain from "../ui/layout/SectionMain";

function LecturerPage() {
  return (
    <SectionMain >
      <Outlet />
    </SectionMain>
  );
}

export default LecturerPage;
