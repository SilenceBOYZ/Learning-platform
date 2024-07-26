import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import MainContent from "./MainContent";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      <div className="flex w-full ">
        <Navbar />
        <Header />

        <MainContent>
          <Outlet />
        </MainContent>
      </div>
      <Footer />
    </>
  );
}

export default AppLayout;
