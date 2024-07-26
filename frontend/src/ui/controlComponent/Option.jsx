function Option({ value, children, defaultValue = false }) {
  return (
    <option value={value} defaultValue={defaultValue}>
      {children}
    </option>
  );
}

export default Option;
