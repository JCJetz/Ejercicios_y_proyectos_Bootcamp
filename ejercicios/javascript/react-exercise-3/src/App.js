import logo from './logo.svg';
import './App.css';
import React, { userState, useState}  from 'react';
import StateExample from './componentes/holamundo';
import Button from './componentes/button';
import Input1 from './componentes/input';
import Header from './componentes/contactos';
import AvatarList from './componentes/contactos/avatar-list';


function App() {

  const [text, setText] = useState ("Hola Mundo");
//text es una const q vale Hola Mundo
//devuelve una funcion q me permite modificarlo (setText)





  /*  Initial State */
  let [Name, setname] = useState('');




  /* Avatar list*/
  const contacts = [
    {
      img: `https://randomuser.me/api/portraits/men/1.jpg`,
      name: "pepe"
    },
    {
      img: `https://randomuser.me/api/portraits/women/2.jpg`,
      name: "carla"
    },
    {
      img: `https://randomuser.me/api/portraits/men/3.jpg`,
      name: "andres"
    },
    {
      img: `https://randomuser.me/api/portraits/women/4.jpg`,
      name: "andrea"
    },
    {
      img: `https://randomuser.me/api/portraits/men/5.jpg`,
      name: "victor"
    },
    {
      img: `https://randomuser.me/api/portraits/men/6.jpg`,
      name: "jose"
    },
  ];
 
  return (
   <>
<StateExample texto={text}></StateExample>
<Button></Button>
<Input1></Input1>
   
<Header>4 exercise</Header>
<AvatarList userList={contacts}></AvatarList>

</>

  );
}

export default App;








