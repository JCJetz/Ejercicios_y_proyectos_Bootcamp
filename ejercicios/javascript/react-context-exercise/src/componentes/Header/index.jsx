import "../../App.css";
import { useContext } from "react";
import CounterContext from "../../Context/CounterContext";
import "./style.css";

function Header() {
  const [counterState] = useContext(CounterContext);

  return (
    <header className="header_container">
      <h1>Carrito</h1>
      <div className="circulo_rojo">{counterState}</div>
    </header>
  );
}

export default Header;
