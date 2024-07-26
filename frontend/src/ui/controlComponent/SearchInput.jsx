import { FaSearch } from "react-icons/fa";

function SearchInput({ width = "w-full", register }) {
  return (
    <label
      className={`input focus-within:outline-none input-bordered flex items-center gap-2 h-10 border-2 py-6 ${width}`}
    >
      <input
        type="text"
        className="grow text-neutral-400"
        placeholder="Search"
        {...register}
      />
      <FaSearch className="cursor-pointer" />
    </label>
  );
}

export default SearchInput;
