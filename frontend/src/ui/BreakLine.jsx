function BreakLine({ children, bgColor = "bg-slate-400", textColor = "" }) {
  if (children === undefined)
    return (
      <div className={`flex items-center justify-center gap-1 font-medium`}>
        <span className={`w-full h-[1px] inline-block  ${bgColor}`}></span>
      </div>
    );

  return (
    <div className={`flex items-center justify-center gap-1 font-medium`}>
      <span className={`w-full h-[1px] inline-block  ${bgColor}`}></span>
      <span className={textColor}>{children}</span>
      <span className={`w-full h-[1px] inline-block  ${bgColor}`}></span>
    </div>
  );
}

export default BreakLine;
