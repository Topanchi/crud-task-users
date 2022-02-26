import React from 'react';
import { Pagination } 
        from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const PaginationComponent = ({ tasksPerPage, totalTasks, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTasks / tasksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
     <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>/* ,
    <div style={{ display: 'block', width: 700, padding: 30 }}>
      <Pagination>
        <Pagination.Prev />
        <Pagination.Ellipsis /> 
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Item href='!#'>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Next />
      </Pagination>
    </div> */
    
  );
};

export default PaginationComponent;