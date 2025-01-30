import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App';
import Projects from "./Routes/Projects.jsx";
import About from './Routes/About.jsx';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />}>
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
        </Route>
    </Routes>
  </BrowserRouter>
);