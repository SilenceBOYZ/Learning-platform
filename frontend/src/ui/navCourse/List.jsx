function List({ children, width = "w-full", custom = "" }) {
  return (
    <ul className={`flex border-b-[1px] box-border pt-2 ${width} ${custom}`}>
      {children}
    </ul>
  );
}

export default List;
