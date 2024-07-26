import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import SectionItem from "./SectionItem";

function Section({ lecture }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleSetOpen() {
    setIsOpen((isOpen) => !isOpen);
  }

  const { section_title, lectures } = lecture;

  // console.log(lectures);

  return (
    <>
      <li
        className={`pl-4 py-4 pr-6 bg-yellow-50 border-b-[1px]`}
        onClick={() => handleSetOpen()}
      >
        <h3 className="flex items-center justify-between font-semibold">
          {section_title}
          <span>
            <FaChevronDown
              className={`transition-all duration-300 ${
                !isOpen ? "" : "rotate-180"
              }`}
            />
          </span>
        </h3>
      </li>
      {!isOpen ? null : (
        <ul className="font-normal">
          {lectures.map((lecture, index) => (
            <SectionItem
              key={lecture.lecture_id}
              index={index}
              lecture={lecture}
            />
          ))}
        </ul>
      )}
    </>
  );
}

export default Section;
