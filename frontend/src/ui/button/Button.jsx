function Button({
  btnColor = "bg-green-600",
  textColor = "text-white",
  children,
  custom = "",
  padding = "px-6 py-2",
}) {
  return (
    <button
      className={`flex box-border ${padding} justify-center items-center font-bold rounded-full ${btnColor} ${textColor} ${custom}`}
    >
      {children}
    </button>
  );
}

export default Button;
