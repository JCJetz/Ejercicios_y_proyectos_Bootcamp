import './style.css';
import React from 'react';


function FillBox({ colorChange }) { // recibe variable, color vale colorChange
return (
    <div style={{height: "150px", width: "150px", backgroundColor : colorChange }}>
    </div>
)
}
    export default FillBox