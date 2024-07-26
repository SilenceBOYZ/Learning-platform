import { BsFillStarFill } from "react-icons/bs";


function StarsBox({ size, spacing = "" }) {
  return (
    <div className={`flex ${spacing}`}>
      <BsFillStarFill size={size} className="text-yellow-400" />
      <BsFillStarFill size={size} className="text-yellow-400" />
      <BsFillStarFill size={size} className="text-yellow-400" />
      <BsFillStarFill size={size} className="text-neutral-300" />
    </div>
  );
}

export default StarsBox;
