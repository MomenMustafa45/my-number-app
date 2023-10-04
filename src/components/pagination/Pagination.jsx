import "./pagination.css";

const Pagination = ({ paginationNums }) => {
  return (
    <div className="pagination-container">
      <p>Prev</p>
      {paginationNums.map((num) => {
        return <p className="pagintaion-nums">{num}</p>;
      })}
      <p>Next</p>
    </div>
  );
};

export default Pagination;
