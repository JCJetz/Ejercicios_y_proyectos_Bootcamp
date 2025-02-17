import { useState } from "react";
import "./formInput.css";



const FormInput = (props) => {
    const[focused, setFocused] = useState(false);

    // Extraemos propiedades específicas y el resto va en inputProps
    const { label, errorMessage, onChange, id, ...inputProps } = props;
   //Menejador eventos 
    const handleFocus = (e) => {
        setFocused(true);
    };

    return (
     <div className="formInput">
        <label>{label}</label>   
        <input {...inputProps}    // Spread operator para pasar todas las props restantes
        onChange={onChange}       // Manejador de cambios
        onBlur={handleFocus}     // Se activa cuando el input pierde el foco
        onFocus={() =>           // Lógica especial para el campo confirmPassword
            inputProps.name === "confirmPassword" && setFocused(true)
                }
        focused={focused.toString()} // Estado focused convertido a string
        />
        <span>{errorMessage}</span>
     </div>
    );
};
export default FormInput;