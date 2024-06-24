import AccordionItem from "./AccordionItem";

function AccordionList({
  defaultChecked = false,
  section = { section_title: "Giới thiệu khóa học", amountMinutes: "14:15" },
}) {
  console.log(section);
  const { section_title, amountMinutes, lectures } = section;

  return (
    <div className="collapse collapse-plus bg-slate-100 rounded-md ">
      <input
        type="checkbox"
        name="my-accordion-3"
        defaultChecked={defaultChecked}
      />
      <div className="collapse-title text-xl font-medium flex justify-between pl-10 items-center">
        <h3 className="uppercase text-neutral-500">{section_title}</h3>
        <span className="uppercase text-neutral-500 text-lg">
          {amountMinutes}
        </span>
      </div>
      <ul className="collapse-content bg-white w-full p-0 pb-[0_!important]">
        {lectures.map((lecture, index) => (
          <AccordionItem key={index} lecture={lecture}/>
        ))}
      </ul>
    </div>
  );
}

export default AccordionList;
