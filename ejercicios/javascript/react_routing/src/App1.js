import React from "react";
import { BrowserRouter as Route, Outlet, Routes } from "react-router-dom";
import Navbar from "./Navbar.js";
import Home from "./components/pages/Home.js";
import Movies from "./components/pages/Movies";
import Series from "./components/pages/Series";




function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" component={Movies} />
            <Route path="/series" element={<Series />} />
          </Routes>
          </Navbar>
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;
