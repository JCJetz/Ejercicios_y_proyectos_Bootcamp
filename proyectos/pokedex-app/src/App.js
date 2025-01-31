import React, { useState, useEffect } from "react";
import "./App.css";
import PokeList from "./componentes/PokeList/PokeList";
import Details from "./pages/Details/index.jsx";
import { BrowserRouter, Route, Router, Routes, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/Ejercicios_y_proyectos_Bootcamp/proyectos/pokedex-app" element={<PokeList />} />
          <Route path="/Ejercicios_y_proyectos_Bootcamp/proyectos/pokedex-app/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
