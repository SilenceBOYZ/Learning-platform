function Card({ children, urlImageCourse, title, lecturename }) {
  return (
    <div className="p-4 bg-white max-w-[18rem] w-[16rem] rounded-md shadow-lg text-sm">
      <div className="w-full rounded-md h-[160px] mb-3">
        <img className="w-full h-full" src={urlImageCourse} alt="course" />
      </div>
      <h2 className="font-medium text-[1rem] leading-6 h-12">{title}</h2>
      <span className="text-violet-700 text-sm font-medium block mb-2">
        {lecturename}
      </span>
      {children}
    </div>
  );
}

export default Card;
