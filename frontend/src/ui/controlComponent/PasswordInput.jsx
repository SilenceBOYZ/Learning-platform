import { useState } from "react";
import { HiKey } from "react-icons/hi2";
import { HiEye, HiEyeOff } from "react-icons/hi";

function PasswordInput({ name, register = null }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <label className="input focus-within:outline-none flex items-center gap-2 w-full">
      <HiKey size={18} />
      <input
        type={!isOpen ? "password" : "text"}
        className="grow"
        placeholder={name}
        {...register}
      />
      <span onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        {isOpen ? <HiEye  size={20}/> : <HiEyeOff  size={20}/>}
      </span>
    </label>
  );
}

export default PasswordInput;
