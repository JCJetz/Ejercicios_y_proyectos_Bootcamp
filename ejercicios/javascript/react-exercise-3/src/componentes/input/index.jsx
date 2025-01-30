import './style.css';
import React, { useState} from 'react';




function Input1(props) {

    const [Name, setname]= useState("")

      /* The handleChange() function to set a new state for input */
    const handleChange = (event) => setname(event.target.value);

    return (
        <>
        <form>
          { /* The handleChange() se activa cuando se ingresa texto */}
          <div>
            <h1>Escribe aquí algo: <span style={{ color: 'red' }}> {Name}</span></h1>
            <input
              type="text"
              value={Name}
              onChange={handleChange}
              placeholder="Enter a text"
            />
          </div>
        </form>
      </>

    )
}

export default Input1;




