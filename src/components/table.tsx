function Table({ children, ...props }: any) {
  return (
    <div className="table">
      <table {...props}>{children}</table>
    </div>
  );
}

export default Table;
