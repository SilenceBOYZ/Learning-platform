import { NavLink } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

function AccordionItem({
  lecture = {
    lecture_id: "1",
    title: "Welcome to the Course",
    duration: "5 minutes",
    video_url:
      "blob:https://www.youtube.com/90dc5cf3-8007-4bb1-bf68-b831fa528d8d",
    resources: [],
  },
}) {
  const { title, duration } = lecture;
  // const { lecture_id, title, duration, video_url, resources } = lecture;
  return (
    <li className="cursor-pointer last:rounded-br-sm last:rounded-bl-md">
      <NavLink className="text-neutral-500 py-3 border-[1px] border-t-[0px] border-slate-200 px-4 w-full font-medium flex items-center gap-2 justify-between pr-12 hover:text-purple-700">
        <span className="flex items-center gap-2">
          <FaPlay className="text-purple-900" /> <span>{title}</span>
        </span>
        <span className="text-lg">{duration}</span>
      </NavLink>
    </li>
  );
}

export default AccordionItem;
