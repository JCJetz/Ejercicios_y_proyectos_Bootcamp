import React from "react";

const Pagination = ({ pokemonPerPage, totalPokemons, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPokemons / pokemonPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map((number) => (
        <a
          key={number}
          onClick={(e) => {
            e.preventDefault();
            paginate(number);
          }}
        >
          {number}
        </a>
      ))}
    </div>
  );
};

export default Pagination;
