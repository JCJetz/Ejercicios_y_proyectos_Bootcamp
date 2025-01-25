import React from "react";
import "../../App.css";
import { useEffect, useState } from "react";
import PokeCard from "../PokeCard/PokeCard";
import Nav from "../Nav";
import Footer from "../Footer";
import Details from "../../pages/Details";
import Pagination from "../Pagination/Pagination";

//id, name, el sprites_front_default y los types

function PokeList() {
  const [pokemons, setPokemons] = useState([]);
  const url = "https://pokeapi.co/api/v2/pokemon?limit=288";
  //const url = "https://pokeapi.co/api/v2/pokemon/${pokemon.id}";
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage] = useState(12);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const promises = data.results.map((result) =>
          fetch(result.url).then((res) => res.json())
        );
        Promise.all(promises).then((pokemonData) => {
          console.log(pokemonData);
          const pokemons = pokemonData.map((pokemon) => ({
            id: pokemon.id,
            name: pokemon.name,
            types: pokemon.types.map((el) => el.type.name),
            image_url: pokemon.sprites.front_default,

            attack: pokemon.stats.find((stat) => stat.stat.name === "attack")
              .base_stat,
            defense: pokemon.stats.find((stat) => stat.stat.name === "defense")
              .base_stat,
            specialAttack: pokemon.stats.find(
              (stat) => stat.stat.name === "special-attack"
            ).base_stat,
            specialDefense: pokemon.stats.find(
              (stat) => stat.stat.name === "special-defense"
            ).base_stat,
            speed: pokemon.stats.find((stat) => stat.stat.name === "speed")
              .base_stat,
          }));
          setPokemons(pokemons);
        });
      })
      .catch((error) => console.error(error));
  }, []);

  // Función para manejar la búsqueda
  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm.toLowerCase());
  };

  // Maneja el filtro de los Pokémons por tipo y actualiza el estado `filter`.
  const handleFilter = (filterTerm) => {
    setFilter(filterTerm.toLowerCase());
  };

  // Función para recargar la página
  const handleRefresh = () => {
    window.location.reload();
  };

  // Filtrar pokemons basados en el searchTerm
  const filteredPokemons = pokemons.filter(
    (pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm) &&
      (filter === "" || pokemon.types.includes(filter))
  );

  // Función para buscar los detalles del Pokemon seleccionado
  const fetchPokemonDetails = async (pokemonId, pokemon) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    const response = await fetch(url);
    const data = await response.json();

    const updatedPokemon = {
      ...pokemon,
      sprites: data.sprites,
      stats: data.stats,
      abilities: data.abilities,
    };
    // Establecer el estado del pokemon seleccionado
    setSelectedPokemon(updatedPokemon);
  };

  //Pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastPokemon = currentPage * pokemonPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
  const currentPokemons = filteredPokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  return (
    <>
      <Nav
        onSearch={handleSearch}
        onFilter={handleFilter}
        onRefresh={handleRefresh}
      />

      {currentPokemons.length > 0 && (
        <section>
          {currentPokemons.map((pokemon, index) => (
            <PokeCard
              key={index}
              pokemon={pokemon}
              fetchPokemonDetails={(pokemonId) =>
                fetchPokemonDetails(pokemonId, pokemon)
              }
            />
          ))}
        </section>
      )}
      {selectedPokemon && <Details pokemon={selectedPokemon} />}

      <Pagination
        pokemonPerPage={pokemonPerPage}
        totalPokemons={filteredPokemons.length}
        paginate={paginate}
      ></Pagination>

      <Footer></Footer>
    </>
  );
}

export default PokeList;

{
  /*
  <PokeCard key={index} 
    pokemon={pokemon} 
    fetchPokemonDetails={fetchPokemonDetails}/>

*/
}

/*
    const [pokemons, updPokemons] = useState([]);
    const [FilteredPokemons,updPokemonsFiltered] = useState([]);

    useEffect(() => {

        fetch("https://pokeapi.co/api/v2/pokemon")
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            updPokemons((pokemons) => [...pokemons, data])
            updPokemonsFiltered((pokemons) => [...pokemons, data])
        });
    },[]);
    */

/* OLD POKELIST
    
    function PokeList () {

    //id, name, el sprites_front_default y los types

    const [pokemons, setPokemons] = useState([{id:'',name:'',image_url:'',types:[]}]);
    const url = "https://pokeapi.co/api/v2/pokemon";
    let poks  = [];
    const [info, setInfo] = useState({});

    function infoSetter(data){
        setInfo(data.info);
        return data.results;
    }

    async function fetchPokemons(url) {

        fetch (url)
        .then(response => response.json())
        .then(data => 
            infoSetter(data)
          )
        .then(async results => {

            //console.log(results)

            await Promise.all(results.map((e, index, array) => {
              
              return fetch(e.url)
                  .then(response => response.json())
                  .then(data => {
                    
                    poks[index] = {id: data.id, name: e.name, image_url:data.sprites.front_default}

                    let types = []
                    data.types.map(({type})=>{ 
                        types.push(type.name)
                      
                    });
                    
                    poks[index] = {...poks[index], ...{types:types}}
                    
                  })
            }));
            setPokemons(poks)
            //console.log("poks: ",poks)
            console.log("pokemons: ",pokemons)
    
        }).catch(error => console.log(error));
    };

    fetchPokemons(url)


    return(
        <>
    
            <section>
                {
                pokemons.map((p,i) => 
                <>
                    <PokeCard key={i} pokemon={p}></PokeCard>
                </>)
                }
            </section>
    
        <Nav></Nav>
    
        </>
    )

    
}

export default PokeList;

    
    */
