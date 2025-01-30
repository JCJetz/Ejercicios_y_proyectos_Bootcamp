import logo from './logo.svg';
import './App.css';
import EmptyBox from './componentes/EmptyBox';
import BoxContainer from './componentes/BoxContainer';
import InputPadre from './componentes/InputPadre';
import CountryList from './componentes/CountryList';

function App() {

  const countries = [
    {
      name_es: "ESPAÑA",
      dial_code: 34
    },
    {
      name_es: "MÉJICO",
      dial_code: 52
    },
    {
      name_es: "CHILE",
      dial_code: 56
    },
    {
      name_es: "CANADA",
      dial_code: 1
    },
  ];


  return (
    <>
<BoxContainer></BoxContainer>
<InputPadre></InputPadre>
<CountryList></CountryList>

    </>
  );
}

export default App;
