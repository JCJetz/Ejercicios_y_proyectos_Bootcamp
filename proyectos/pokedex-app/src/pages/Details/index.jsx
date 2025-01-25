import "../../App.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import BallImage from "../../BallImage.png";

function Details() {
  const { id } = useParams(); // params = {id: 'valor en la URL'}
  //const [pokemonDetails, setPokemonDetails] = useState({});
  const [pokemonDetails, setPokemonDetails] = useState({
    id: null,
    sprites: {},
    stats: [],
    abilities: [],
  });

  useEffect(() => {
    console.log("Fetching data for ID:", id);

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((response) => response.json())
      .then((data) => setPokemonDetails(data));
  }, [id]);
  console.log("Pokemon Details:", pokemonDetails);

  return (
    <div className="container-details">
      <div className="nav-btn">
      <Link to={-1} className="btn-home"><img src={BallImage} alt="Home" className="btn-home" /></Link></div>
      <h2 className="pokemonDetailsId">ID: {pokemonDetails.id}</h2>
      <img
        className="imgDetails"
        src={pokemonDetails.sprites?.front_default}
        alt="Pokemon"
      />
      {pokemonDetails.stats.length > 0 && (
        <>
          <section className="c-d-card">
            <h3 className="attack">
              Attack:{" "}
              {
                pokemonDetails.stats.find((stat) => stat.stat.name === "attack")
                  .base_stat
              }
            </h3>
            <h3 className="defense">
              Defense:{" "}
              {
                pokemonDetails.stats.find(
                  (stat) => stat.stat.name === "defense"
                ).base_stat
              }
            </h3>
            <h3 className="special-attack">
              Special Attack:{" "}
              {
                pokemonDetails.stats.find(
                  (stat) => stat.stat.name === "special-attack"
                ).base_stat
              }
            </h3>

            <h3 className="special-defense">
              Special Defense:{" "}
              {
                pokemonDetails.stats.find(
                  (stat) => stat.stat.name === "special-defense"
                ).base_stat
              }
            </h3>
            <h3 className="speed">
              Speed:{" "}
              {
                pokemonDetails.stats.find((stat) => stat.stat.name === "speed")
                  .base_stat
              }
            </h3>

            <h3 className="height">Height: {pokemonDetails.height / 10}m</h3>
            <h3 className="weight">Weight: {pokemonDetails.weight / 10}Kg</h3>
          </section>
        </>
      )}
      <section className="habilidades-container">
        <h2 className="habilidades">Habilidades:</h2>
        <ul>
          {pokemonDetails.abilities.length > 0 &&
            pokemonDetails.abilities.map((ability, index) => (
              <li key={index}>{ability.ability.name}</li>
            ))}
        </ul>
      </section>
    </div>
  );
}

export default Details;

{
  /* 
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function PDetails () {

    const {id} = useParams();
    const [pokemons, setPokemons] = useState ({})

    useEffect (() => {

        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        
        .then(res => res.json())
        .then(p => setPokemons(p))
    }, [id])
// si pokemons es igual a vacio ponme cargando, sino ponme esta img
    return(
        <>
            {pokemons === undefined ? <p>loading</p> : <img src={pokemons.sprites.back_default}></img>}
            <p>Info de {pokemons.id}</p>
        </>

    )
    
}

export default PDetails
*/
}
