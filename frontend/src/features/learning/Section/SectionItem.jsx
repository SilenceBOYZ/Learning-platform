import { HiPlayCircle, HiMiniCheckCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";

function SectionItem({ index, lecture }) {
  const { title, duration } = lecture;

  // console.log(title);

  return (
    <Link
      to={`${title}`}
      className="flex pl-4 py-2 pr-6 items-center justify-between cursor-pointer transition-all duration-300 hover:bg-neutral-100"
    >
      <div className="space-y-1">
        <div>
          <span>{index + 1}</span>. {title}
        </div>
        <div className="flex items-center gap-1 text-sm">
          <HiPlayCircle /> <span>{duration}</span>
        </div>
      </div>
      <HiMiniCheckCircle size={18} className="text-green-600" />
    </Link>
  );
}

export default SectionItem;
