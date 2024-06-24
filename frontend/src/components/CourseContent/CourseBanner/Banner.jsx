import StarsBox from "../../../ui/StarsBox";

function Banner({
  courseImageUrl = "../../public/banner_python-0d345d125b6892840c.jpg",
  courseTitle = "Lập trình python",
  courseDescription = "Lập trình python là môn học có hướng phát triển tốt cho IT",
}) {
  return (
    <div
      className="h-[200px] w-full relative"
      style={{
        background: `linear-gradient(to right, rgba(6, 5, 5, 0.583), rgba(8, 8, 8, 0.686)), url('${courseImageUrl}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="absolute left-10 top-8 text-white space-y-4">
        <h1 className="text-3xl font-medium">{courseTitle}</h1>
        <p className="font-md w-[80%]">{courseDescription}</p>
        <StarsBox size={18} spacing={"3"} />
      </div>
    </div>
  );
}

export default Banner;
