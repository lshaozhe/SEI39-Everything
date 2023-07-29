import React from "react";

const pagination = (props) => {
  const handleClick = (e) => {
    switch (e.target.id) {
      case "paginationNext":
        props.setCurrentPage(props.currentPage + 1);
        break;
      case "paginationPrev":
        props.setCurrentPage(props.currentPage - 1);
        break;
      case "paginationOne":
        props.setCurrentPage(props.currentPage + 1);
        break;
      case "paginationTwo":
        props.setCurrentPage(props.currentPage + 2);
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          <li
            className={
              props.currentPage > 1 ? "page-item" : "page-item disabled"
            }
          >
            <p className="page-link" id="paginationPrev" onClick={handleClick}>
              Prev
            </p>
          </li>
          <li className="page-item disabled">
            <p className="page-link" onClick={handleClick}>
              {props.currentPage}
            </p>
          </li>
          <li className="page-item">
            <p className="page-link" id="paginationOne" onClick={handleClick}>
              {props.currentPage + 1}
            </p>
          </li>
          <li className="page-item">
            <p className="page-link" id="paginationTwo" onClick={handleClick}>
              {props.currentPage + 2}
            </p>
          </li>
          <li className="page-item">
            <p className="page-link" id="paginationNext" onClick={handleClick}>
              Next
            </p>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default pagination;
