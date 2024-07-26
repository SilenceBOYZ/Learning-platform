function InputFile({ children, register, accept="" }) {
  return (
    <label className="block space-y-2">
      {children}
      <input
        type="file"
        className="file-input file-input-bordered w-full max-w-full focus-within:outline-none"
        accept={accept}
        {...register}
      />
    </label>
  );
}

export default InputFile;
