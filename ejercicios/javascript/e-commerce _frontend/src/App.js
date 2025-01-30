import './App.css';
import Header from './componentes/Header';
import Home from './componentes/Home';
import ShoppingBag from './componentes/ShoppingBag';
import Confirmation from './componentes/Confirmation';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, createContext } from 'react';

// Create BagContext
export const BagContext = createContext();

function App() {
  // State to manage shopping bag items
  const [bagItems, setBagItems] = useState([]);

  return (
    <Router>
      <BagContext.Provider value={[bagItems, setBagItems]}>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shopping-bag" element={<ShoppingBag />} />
            <Route path="/confirmation" element={<Confirmation />} />
          </Routes>
        </div>
      </BagContext.Provider>
    </Router>
  );
}

export default App;