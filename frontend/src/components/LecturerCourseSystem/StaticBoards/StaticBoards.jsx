import RectagleStatistic from "../../../ui/StaticUi/RectagleStatistic";
import {HiCreditCard} from "react-icons/hi2"

function StaticBoards() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <RectagleStatistic
        title={"Học viên"}
        value={15}
        bgColor="bg-yellow-200"
      >
        <HiCreditCard size={32} className="text-yellow-700" />
      </RectagleStatistic>
      <RectagleStatistic
        title={"Doanh thu"}
        value={15}
        bgColor="bg-yellow-200"
      >
        <HiCreditCard size={32} className="text-yellow-700" />
      </RectagleStatistic>
      <RectagleStatistic
        title={""}
        value={15}
        bgColor="bg-yellow-200"
      >
        <HiCreditCard size={32} className="text-yellow-700" />
      </RectagleStatistic>
      <RectagleStatistic
        title={"Lượt thích"}
        value={15}
        bgColor="bg-yellow-200"
      >
        <HiCreditCard size={32} className="text-yellow-700" />
      </RectagleStatistic>
    </div>
  );
}

export default StaticBoards;
 