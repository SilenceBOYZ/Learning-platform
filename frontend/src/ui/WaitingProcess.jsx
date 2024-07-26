import { HiMiniFingerPrint } from "react-icons/hi2";
import Heading from "./Heading";
import { Link } from "react-router-dom";

function WaitingProcess() {
  return (
    <div className="flex flex-col items-center space-y-2 rounded-sm bg-white px-6 py-4 border-[1px] shadow-md">
      <HiMiniFingerPrint size={48} />
      <Heading>Bạn đã gửi đăng ký thành công</Heading>
      <span>Hãy chờ người quản trị duyệt yêu cầu của bạn</span>
      <Link to="../" className="px-4 py-2 rounded-sm bg-violet-600 text-white font-medium inline-block w-full text-center">Quay về trang chủ</Link>
    </div>
  );
}

export default WaitingProcess;
