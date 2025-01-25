import logo from "./logo.svg";
import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./componentes/Navbar";
import Characters from "./componentes/Characters";
//import Pagination from './componentes/Pagination';
//import MultipleFilters from './componentes/MultipleStates';
//import Filters from './componentes/Filters';
import InfiniteScroll from "react-infinite-scroll-component";
import rickAndMortyLogo from './asseets/Rick_and_Morty.png';

function App() {
  const [characters, setCharacters] = useState([]); // variable characters y función setCharacters para manejar su estado, con un estado inicial vacío
  const [filteredchars, filterChars] = useState([]);
  const [laststatus, updateLastStatus] = useState("All"); //variable laststatus y función updateLastStatus para manejar su estado, con un estado inicial de 'All'

  //const [isLoading, setIsLoading] = useState(false)
  const [nextPage, setNextPage] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const [searchterm, isSearched] = useState("");

  const initialurl = "https://rickandmortyapi.com/api/character"; //variable initialurl con la URL inicial de la API

  useEffect(() => {
    // Obtener la lista de personajes iniciales de la API
    //Llama a la función fetchCharacters y establece su resultado en el estado characters
    fetchCharacters()
      .then(function (res) {
        setCharacters(res);
      })
      .then(console.log(`Chars: ${characters}`)); // Muestra characters después de que se haya establecido
  }, []);

  const fetchCharacters = async () => {
    //setIsLoading(true)
    const data = await fetch(initialurl).then(
      (response) => response.json() // Realiza petición a la API con la URL initialurl y convierte la respuesta a formato JSON
    );
    console.log(`Next: ${data.info.next}`); // Muestra el valor de la siguiente página de la API
    infoSetter(data); // Llama a la función infoSetter pasando el valor de data
    //setCharacters(data.results)  // Establece el valor de los personajes en el estado characters
    //setIsLoading(false)
    return data.results; // Devuelve los resultados de la API
  };

  const infoSetter = async (data) => {
    /*
    Intento de function para el setter de siguiente página separada para intentar usar un 
    "next" construido (newNext) en el reFetch y que esté disponible dentro de la misma función
   
    */
    console.log(typeof data);
    let np = typeof data == "string" ? data : data.info.next;
    console.log("setting nextPage to: ", np);
    setNextPage(np); // Establece el valor de nextPage al valor de np
    return data; // Devuelve datos de la API
  };

  const reFetch = async () => {
    console.log("re-fetching.."); // Muestra  mensaje indicando que se está volviendo a obtener los datos
    //setIsLoading(true)
    await fetch(nextPage)
      .then((response) => response.json())

      .then((data) => infoSetter(data)) // Llama a la función infoSetter pasando el valor de data
      .then((d) => {
        console.log(`Next at reFetch: ${nextPage}`); // Muestra en consola el valor de nextPage después de que se haya establecido
        //setNextPage(data.info.next) // Establece el valor de nextPage al valor de la siguiente página de la API
        //console.log(data.results)
        d.info.next ? setHasMore(true) : setHasMore(false); // Establece el valor de hasMore en true si hay una próxima página, de lo contrario, lo establece en false
        console.log(hasMore);

        let newData =
          filteredchars.length > 0
            ? filteredchars.concat(d.results)
            : characters.concat(d.results); // Crea una nueva variable newData que concatena los resultados filtrados o los personajes originales con los nuevos resultados de la API

        if (laststatus === "All") {
          // Comprueba si el ultimo estado es 'All'
          console.log("Search term? ", searchterm); // Muestra si hay un término de búsqueda
          if (searchterm.length === 0) {
            // Comprueba si el término de busqueda está vacío
            console.log("No search term"); // Muestra en la consola que no hay un término de búsqueda
            setCharacters(newData); // Establece el valor de los personajes en el estado characters con newData
          } else {
            console.log("Search term? ", searchterm); // Muestra si hay un término de búsqueda
            console.log("Old Chars:", filteredchars); // Muestra los personajes filtrados anteriores
            newData = newData.filter((c) =>
              c.name.toLowerCase().includes(searchterm)
            ); // Filtra los personajes en newData por nombre utilizando el término de búsqueda
            console.log("Filtered re-search: ", newData);
            let newNext = nextPage.replace(/\d+$/, function (n) {
              return ++n;
            }); // Crea una nueva variable newNext con la próxima página incrementada en 1
            console.log(`Constructed next..: ${newNext}`); // Valor de newNext
            newData.length === filteredchars.length
              ? infoSetter(newNext).then(reFetch())
              : filterChars(newData); // Llama a la función infoSetter pasando el valor de newNext y vuelve a llamar a la función reFetch si la longitud de newData es igual a la longitud de los personajes filtrados, de lo contrario, establece el valor de filteredchars en newData
          }
        } else {
          console.log("Search term? ", searchterm); // Muestra si hay un término de búsqueda
          newData = newData.filter((c) => c.status === laststatus); // Filtra los personajes en newData por estado utilizando el último estado
          newData = searchterm
            ? newData
            : newData.filter((c) => c.name.toLowerCase().includes(searchterm)); // Filtra los personajes en newData por nombre utilizando el término de búsqueda si existe
          filterChars(newData); // Establece el valor de filteredchars en newData
          console.log("Newdata (Filtered):", newData); // Muestra en la consola los nuevos datos filtrados
        }
        return d; // Devuelve los datos de la API
        //setIsLoading(false)
      });
  };

  const filterAlive = () => {
    const aliveFiltered = characters.filter(
      (c) => c.status.toLowerCase() === "alive"
    ); // Filtra los personajes vivos en los personajes originales
    filterChars(aliveFiltered); // Establece el valor de filteredchars en aliveFiltered
    updateLastStatus("Alive"); // Establece el valor de laststatus en "Alive"
  };
  const filterDead = () => {
    const deadFiltered = characters.filter(
      (c) => c.status.toLowerCase() === "dead"
    ); // Filtra los personajes muertos en los personajes originales
    filterChars(deadFiltered); // Establece el valor de filteredchars en deadFiltered
    updateLastStatus("Dead"); // Establece el valor de laststatus en "Dead"
  };

  const showAll = () => {
    filterChars([]); // Establece el valor de filteredchars en un arreglo vacío
  };

  const filterByName = (e) => {
    const val = e.target.value.toLowerCase(); // Obtiene el valor del input en minúsculas
    // reFetch a partir de 2 caracters, si hay menos de 20 mostrándose
    //if (val.length > 1 && (characters.length < 20 || (filteredchars.length > 0 && filteredchars.length < 20))) reFetch();
    let filteredArray = characters.filter((c) =>
      c.name.toLowerCase().includes(val)
    ); // Filtra los personajes en los personajes originales por nombre utilizando el valor del input en minúsculas
    filteredArray =
      laststatus === "All"
        ? filteredArray
        : filteredArray.filter((c) => c.status === laststatus); // Filtra los personajes en filteredArray por estado si el último estado no es 'All'
    filterChars(filteredArray); // Establece el valor de filteredchars en filteredArray
    isSearched(val); // Establece el valor de searchterm en val
  };

  /*
  const onPrevious = () => {
    fetchCharacters(info.prev);
  } 
  const onNext = () => {
    fetchCharacters(info.next);
  } 
  */

  return (
    <>
      <Navbar
        brand="Rick and Morty App"
        filterAlive={filterAlive}
        filterDead={filterDead}
        showAll={showAll}
      ></Navbar>

      <div className="container mt-5">
        <div className="letters">
          <img className="letters" src={rickAndMortyLogo} alt="main logo"></img>
        </div>

        <input
          onChange={filterByName}
          type="search"
          placeholder="Busca personaje"
        ></input>

        <InfiniteScroll
          dataLength={
            filteredchars.length > 0 ? filteredchars.length : characters.length
          } // Establece la longitud de los datos en filteredchars si existen, de lo contrario, en characters
          next={reFetch} // Establece la función reFetch como la función que se ejecuta cuando se necesita cargar más datos
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>No hay más elementos que mostrar!</b>
            </p>
          }
          //pullDownToRefreshThreshold={200}
        >
          <Characters
            characters={filteredchars.length > 0 ? filteredchars : characters}
          />
        </InfiniteScroll>
        {
          //<Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} ></Pagination>
        }
      </div>
    </>
  );
}

export default App;
