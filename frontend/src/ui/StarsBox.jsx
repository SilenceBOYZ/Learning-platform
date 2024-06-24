import { HiStar } from "react-icons/hi2";

function StarsBox({ size, spacing = "" }) {
  return (
    <div className={`flex space-x-${spacing}`}>
      <HiStar size={size} className="text-yellow-400" />
      <HiStar size={size} className="text-yellow-400" />
      <HiStar size={size} className="text-yellow-400" />
      <HiStar size={size} className="text-neutral-300" />
      <HiStar size={size} className="text-neutral-300" />
    </div>
  );
}

export default StarsBox;
