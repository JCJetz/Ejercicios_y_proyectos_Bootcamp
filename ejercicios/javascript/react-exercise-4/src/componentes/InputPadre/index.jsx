import { useState } from "react";
import InputHijo from '../InputHijo';
import './style.css';



function InputPadre() {
    const [NuevoTexto, actualizarTextoHijo] = useState('');
    const funcionHijo = name => {
        actualizarTextoHijo(name);
    }

    return (
        <>  
            <p>PADRE (Input desde el hijo): {NuevoTexto}</p>
            <InputHijo onFilterChange={funcionHijo}></InputHijo>
        </>
    )
}


export default InputPadre;

