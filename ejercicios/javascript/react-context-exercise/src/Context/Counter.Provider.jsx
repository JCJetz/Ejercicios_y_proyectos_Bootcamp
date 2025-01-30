import {useState} from "react";
import CounterContext from "./CounterContext";


//recibe el children

function CounterProvider ({children}) {

    const [counterState, setcounterState] = useState(0)

    return(

        <CounterContext.Provider value={[counterState, setcounterState]}>

            {children}
        </CounterContext.Provider>
   )
}
export default CounterProvider


