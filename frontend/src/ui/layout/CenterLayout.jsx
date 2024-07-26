function CenterLayout({ children, width ="", height="" }) {
  return <div className={`absolute left-1/2 -translate-x-1/2 ${width} ${height}`}>{children}</div>;
}

export default CenterLayout;
