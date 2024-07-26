function Select({ children, register, width = "w-full", padding = "p-2" }) {
  return (
    <select
      className={`${width} border-2 ${padding} rounded-md border-neutral-400`}
      {...register}
    >
      {children}
    </select>
  );
}

export default Select;
