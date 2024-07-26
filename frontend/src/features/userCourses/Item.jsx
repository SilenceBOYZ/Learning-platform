function Item({ children, active = "" }) {
  return (
    <li className={active}>
      <button
        className={`px-3 pt-2 pb-2 border-b-2  hover:border-b-violet-600 hover:text-violet-600 transition-all duration-300 
   `}
      >
        {children}
      </button>
    </li>
  );
}

export default Item;
