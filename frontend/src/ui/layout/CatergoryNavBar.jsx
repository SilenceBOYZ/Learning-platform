import { NavLink } from "react-router-dom";

function CatergoryNavBar() {
  return (
    <nav className="w-full">
      <ul className="flex items-center justify-center px-4 text-black border-b-[1px] shadow-[0_1px_20px_-15px_rgba(0,0,0,0.3)] ">
        <NavLink to={"/"} className="py-5 px-5 focus:outline-none target:outline-none">Trang chủ</NavLink>
        <NavLink to={"/fields/congnghethongtin"} className="py-5 px-5 focus:outline-none target:outline-none">CNTT & Phần mềm</NavLink>
        <NavLink className="py-5 px-5 focus:outline-none target:outline-none">Tài chính & Kế toán</NavLink>
        <NavLink className="py-5 px-5 focus:outline-none target:outline-none">Marketing</NavLink>
        <NavLink className="py-5 px-5 focus:outline-none target:outline-none">Quản trị kinh doanh</NavLink>
        <NavLink className="py-5 px-5 focus:outline-none target:outline-none">Sức khỏe và thể thao</NavLink>
        <NavLink className="py-5 px-5 focus:outline-none target:outline-none">Phát triển bản thân</NavLink>
      </ul>
    </nav>
  );
}

export default CatergoryNavBar;
