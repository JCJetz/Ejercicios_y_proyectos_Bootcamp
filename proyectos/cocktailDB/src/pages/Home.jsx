import React from "react";
import CocktailList from "../componets/CocktailList";
import SearchForm from "../componets/SearchForm";

const Home = () => {
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  );
};

export default Home;