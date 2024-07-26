import StarsBox from "../StarsBox";

function LineProgress({rating}) {
  return (
    <>
      <div className="flex gap-2 items-center mb-2">
        <progress
          className="progress h-1 w-full "
          value="40"
          max="100"
        ></progress>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-[0.75rem] font-semibold text-neutral-700">
          Đã hoàn thành 40%
        </span>
        <span className="flex">
          <StarsBox size={14} />
          <sub className="ml-2 font-bold  self-start text-neutral-500">
            {rating}
          </sub>
        </span>
      </div>
    </>
  );
}

export default LineProgress;
