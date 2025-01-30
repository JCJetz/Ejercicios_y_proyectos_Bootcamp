import './style.css';
import React, { useState } from 'react';

/*
function Avatar ({userInfo={}}) {
const [isOnline, updateOnline ] = useState(true) // por defecto online
    return ( 

    <div className={`avatar_container $ {isOnline ? '' : 'avatar_container-offline'}`}>
        
    <img  onClick={() => updateOnline(!isOnline)} alt={`Imagen de avatar de ${userInfo.name}`} src={userInfo.img} className='avatar_img' ></img>
    <div className='avatar_status'></div>
    </div>
    )
}

export default Avatar
*/


const Avatar = ({ userInfo, onOffline }) => {
    return (
      <div className="avatar-container" onClick={() => onOffline(userInfo.name)}>
        <img src={userInfo.img} alt={userInfo.name} className="avatar-image" />
        <span className="avatar-name">{userInfo.name}</span>
      </div>
    );
  };
  
  export default Avatar;