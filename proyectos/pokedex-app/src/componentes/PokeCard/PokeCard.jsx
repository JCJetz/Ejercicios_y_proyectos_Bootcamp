import "../../App.css";
import React from "react";
import { Link } from "react-router-dom";

//const PokeCard = ({pokemons = [] }) => {

const PokeCard = ({ Cardkey, pokemon, fetchPokemonDetails }) => {
  console.log(fetchPokemonDetails);
  return (
    <div className="row">
      <div className="col mb-4">
        <div
          className="card"
          onClick={() => fetchPokemonDetails(fetchPokemonDetails.pokemon.id)}
        >
          <Link to={`./details/${pokemon.id}`}>
            <img
              src={pokemon.image_url}
              alt={`Imagen de ${pokemon.id}`}
              className="pokemon-image"
            />
          </Link>
          <div className="description">
            <p className="pokemon-id">ID: {pokemon.id}</p>
            <p className="pokemon-name">Nombre: {pokemon.name}</p>
            {/*  <p>Sprite: {pokemon.image_url}</p> */}
            <p className="pokemon-type">Type1: {pokemon.types[0]}</p>
            {pokemon.types[1] && (
              <p className="pokemon-type">Type2: {pokemon.types[1]}</p>
            )}
            {/*
    <Link to={`/details/${pokemon.id}`}>Ver detalles</Link> 
     */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeCard;
