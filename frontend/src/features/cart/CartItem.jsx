import { HiOutlineHeart, HiOutlineTrash } from "react-icons/hi2";
import StarsBox from "../../ui/StarsBox";

function CartItem() {
  return (
    <div className={`cursor-pointer pb-3 border-t-[1px] border-t-neutral-300`}>
      <div className="w-[100%] rounded-md text-sm flex gap-2 py-2 ">
        <div className="flex gap-2">
          <div className="max-w-[30rem] rounded-md h-[120px]">
            <img
              className="w-full h-full"
              src={`https://i.ytimg.com/vi/CScxy0294SE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDx1G4hpKwdqiy94l6vZlUD1jmMRQ.jpg`}
              alt="course"
            />
          </div>
          <div className="space-y-3">
            <div>
              <h2 className="font-medium text-lg h-6 mb-1">Lập trình</h2>
              <span className=" text-[0.75rem] block mb-2">
                Được tạo bởi Thanh Trí
              </span>
            </div>
            <div className="flex space-x-2">
              <span className="font-bold text-neutral-500">4.8</span>
              <StarsBox size={18} />
            </div>
            <ul className="p-0 flex items-center text-[0.75rem]">
              <li>Tổng số giờ: 18 giờ</li>
              <li>
                <span className="w-2 h-2 inline-block rounded-full bg-neutral-300 mx-2"></span>
                375 bài giảng
              </li>
              <li>
                <span className="w-2 h-2 inline-block rounded-full bg-neutral-300 mx-2"></span>
                Tất cả trình độ
              </li>
            </ul>
          </div>
        </div>

        <div className="ml-auto flex flex-col items-end">
          <p className="font-bold text-lg text-neutral-700 ">350.000 đ</p>
          <s className="mb-3">1.500.000 đ</s>
          <div className="space-y-2">
            <HiOutlineHeart size={24} className="hover:text-violet-700" />
            <HiOutlineTrash size={24} className="hover:text-violet-700" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
