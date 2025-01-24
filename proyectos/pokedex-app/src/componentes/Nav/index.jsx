import "../../App.css";
import PokemonImage from "../../../src/PokemonImage.png";

const Nav = ({ onSearch, onFilter, onRefresh }) => {
    const handleRefresh = () => {
        window.location.reload();
      };

  return (
    <div className="nav">
      <div className="btns">
        <label htmlFor="water" className="boton">
          Water
        </label>
        <input
          id="water"
          type="radio"
          name="filter"
          onChange={() => onFilter && onFilter("water")}
        ></input>

        <label htmlFor="fire" className="boton">
          Fire
        </label>
        <input
          id="fire"
          type="radio"
          name="filter"
          onChange={() => onFilter && onFilter("fire")}
        ></input>

        <label htmlFor="poison" className="boton">
          Poison
        </label>
        <input
          id="poison"
          type="radio"
          name="filter"
          onChange={() => onFilter && onFilter("poison")}
        ></input>

        <label htmlFor="grass" className="boton">
          Grass
        </label>
        <input
          id="grass"
          type="radio"
          name="filter"
          onChange={() => onFilter && onFilter("grass")}
        ></input>

      </div>

      <input
        className="searchTerm"
        type="text"
        placeholder="Search by Pokemon's name"
        onChange={(e) => onSearch && onSearch(e.target.value)}
      />

      <img src={PokemonImage} alt="Pokemon" className="pokemonImage" />
      

      <button className="all" onClick={handleRefresh}>All</button>
    </div>
  );
};

export default Nav;
