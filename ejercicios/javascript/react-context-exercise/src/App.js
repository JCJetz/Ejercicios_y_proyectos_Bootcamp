import logo from "./logo.svg";
import "./App.css";
import Header from "./componentes/Header";
import CounterProvider from "./Context/Counter.Provider";
import Counter from "./componentes/Counter/Counter";

function App() {
  return (
    <div className="App">
      <CounterProvider>
        <Header></Header>
        <Counter></Counter>
      </CounterProvider>
    </div>
  );
}

export default App;
