import { useState , useEffect } from 'react';
//import Avatar from '../avatar';
import './style.css';


/*
function CountryList() { 
    // el array original me lo pasa el padre por props
    //const [initialCountryList, populateCountryList] = useState = "";
    const [filteredCountryList, updateCountryList] = useState({});

////pa guardar necesito en el state gurdar el arr original y será country original.
////   const [filteredCountryList, updateCountryListOriginal] = useState({});


    //el fetch devuelve promesa, then( es una funcion de 2 parametros) tmb se pude usar cast y finally
//un fetch siempre té un useState.
    // r es un objeto. json es de tipo datos funcion y devuelve otra promesa. country es una array
    // useEffect

    useEffect(()=>{
     fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
       .then(response => response.json())
       .then( r => updateCountryList(r.countries));
    }, []);
    
    //let z = "e";
    //let x = cntrList.filter(u => u.name_es.includes(z));
    //console.log(x.map(u => u.name_es));

    const filterCountries = e => {
        // quedarme con los elementos de la lista que incluya
        // en su nombre lo que ha escrito el usuario 
        const val = e.target.value.toLowerCase(); // a minuscula para compara con los nombres y permitir filtrar escribiendo mayúsculas
        //const cntrsFiltered = countries.filter(u => u.name_es.includes(val));

        // SIEMPRE FILTRAR EL ARRAY ORIGINAL, por lo q necesito el arr original
        const cntrsFiltered = filteredCountryList.filter(u => u.name_es.toLowerCase().includes(val));
        console.log(filteredCountryList);
        
        updateCountryList(cntrsFiltered); // actualiza el array y lo repinta con el nuevo valor
    }
// toLowerCase acuerdate de pasarlo las dos veces
    return (
        <section className='countries__container'>
            <input onChange={filterCountries} placeholder='Busca País'></input>
            <ul className='countries-list__container'>
     
                { filteredCountryList.map((item,i) => (<li key={i}> {item.name_es} </li> )) }

            </ul>
        </section>
    )
}

export default CountryList;
 */



const CountryList = () => {
    const [filteredCountryList, setFilteredCountryList] = useState([]);
    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
            .then(response => response.json())
            .then(data => {
                setCountries(data.countries); // Acceder a data.countries
                setFilteredCountryList(data.countries);
                setIsLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setIsLoading(false);
            });
    }, []);

    const filterCountries = e => {
        const val = e.target.value.toLowerCase().trim();
        const cntrsFiltered = countries.filter(u => 
            u.name_es.toLowerCase().includes(val)
        );
        setFilteredCountryList(cntrsFiltered);
    }

    if (isLoading) return <div>Cargando países...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <section className='countries__container'>
            <input 
                type="text"
                onChange={filterCountries} 
                placeholder='Busca País'
            />
            <ul className='countries-list__container'>
                {filteredCountryList.map(country => (
                    <li key={country.code}>{country.name_es}</li>
                ))}
            </ul>
        </section>
    );
};

export default CountryList;