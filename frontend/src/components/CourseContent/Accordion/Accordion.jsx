import { useSelector } from "react-redux";
import { getCourseById } from "../../../store/slices/courseSlice";
import AccordionList from "./AccordionList";
import { useParams } from "react-router-dom";

function Accordion() {
  const { id } = useParams();
  const { content } = useSelector(getCourseById(id));

  console.log(content);

  return (
    <div className="mt-10 space-y-4">
      {content.map((section, index) => (
        <AccordionList key={section.section_title} defaultChecked={index === 0} section={section}/>
      ))}
    </div>
  );
}

export default Accordion;
