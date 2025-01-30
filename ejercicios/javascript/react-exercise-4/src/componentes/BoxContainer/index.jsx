import './style.css';
import React from 'react';
import EmptyBox from '../EmptyBox'
import FillBox from '../FillBox';
import { useState } from 'react';

//padre
function BoxContainer (e) {
    const [color, setColor]= useState('red') // variable de padre

    const handleHover = () => {  

    setColor(color === "red" ? "green" : "red")  // esto es mi funcion pá comunicar de hijo a padre.

}


return ( 
    <div>
<EmptyBox handleHover= {handleHover} ></EmptyBox> {/*lo paso por props pa invocar en el hijo*/}
<FillBox colorChange = {color}></FillBox>
</div>
);  
}

export default BoxContainer

