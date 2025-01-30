import {useContext, userContext} from 'react';
import CounterContext from '../../Context/CounterContext';


function Counter () {

let [counterState, setCounter] = useContext(CounterContext) 


return(


    <div>
    <div className='Container_btn'>
 
    <button onClick={() =>setCounter(++counterState)}>sumar</button> 
     <p> {counterState}</p>
    <button onClick={() =>setCounter(--counterState)}>restar</button>

    </div>
    </div>
   
)
}

export default Counter 



