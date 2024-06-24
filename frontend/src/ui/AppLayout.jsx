import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import MainContent from "./MainContent";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="flex w-full h-[100dvh] bg-neutral-50">
      <Navbar />
      <MainContent>
        <Header />
        <Outlet />
      </MainContent>
    </div>
  );
}

export default AppLayout;
