function Heading({ children, custom = "text-xl" }) {
  return (
    <h2 className={` mt-0 font-medium text-neutral-700 ${custom}`}>
      {children}
    </h2>
  );
}

export default Heading;
