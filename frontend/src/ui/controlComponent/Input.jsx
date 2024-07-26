function Input({ children, type, register, name, custom }) {
  return (
    <label className={`input focus-within:outline-none flex items-center gap-2 w-full border-2 border-neutral-200 ${custom} `}>
      {children}
      <input type={type} className="grow" placeholder={name} {...register} />
    </label>
  );
}

export default Input;
