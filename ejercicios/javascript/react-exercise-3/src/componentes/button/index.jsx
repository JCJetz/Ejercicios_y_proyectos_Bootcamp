import './style.css';
import React, { useState } from 'react';



function Button(props) {
//color es como le llamo, y setColor lo que cambia.
    const [color, setcolor]= useState("red")

    const handleClick = () => setcolor('green');
    
    //const handleClick = () => useState == "red" ? setcolor('green') : setcolor('red');

    return (

    <button style={{backgroundColor: color}} onClick={handleClick}>click</button>
    )
}

export default Button;