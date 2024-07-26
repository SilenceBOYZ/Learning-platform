import Button from "../button/Button";

function Banner({
  width = "w-full",
  custom = "py-8 px-10",
  colorGradient = "linear-gradient(to right, rgb(118, 18, 255), rgb(5, 178, 255))",
  title = "Hãy chọn ngay khóa học của bạn",
  desc = "Hãy chọn ngay khóa học mà bạn yêu thích để cải thiện hơn về chuyên môn, tích lũy kinh nghiệm qua từng bài giảng và các bài thực hành",
  btnDisplay = true,
  btnTitle = "Tìm kiếm ngay",
}) {
  return (
    <div
      className="flex w-100 h-[18rem] bg-slate-400 rounded-lg overflow-hidden flex-grow"
      style={{
        background: colorGradient,
      }}
    >
      <div className={`flex ${width} justify-between ${custom}`}>
        <div className=" text-white w-full  space-y-4 h-full flex flex-col justify-center">
          <h2 className="text-3xl font-semibold">{title}</h2>
          <p className="w-[80%] ">{desc}</p>
          {btnDisplay ? (
            <Button
              btnColor="none"
              custom="border-2 self-start"
              padding="px-4 py-1.5"
            >
              {btnTitle}
            </Button>
          ) : null}
        </div>
        <div className="w-full h-full flex justify-center">
          <img
            className="h-full object-cover"
            src="https://files.fullstack.edu.vn/f8-prod/banners/36/6454dee96205c.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
