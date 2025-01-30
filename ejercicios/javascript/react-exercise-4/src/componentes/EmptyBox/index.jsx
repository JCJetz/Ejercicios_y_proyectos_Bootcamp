import './style.css';
import React, { useState } from 'react';


function EmptyBox({handleHover}) {


    return ( 
        <div onMouseEnter={handleHover} style={{height: "150px", width: "150px"}}>
        </div>

 );  
}

export default EmptyBox


    