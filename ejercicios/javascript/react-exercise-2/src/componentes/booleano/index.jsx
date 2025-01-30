import './style.css';

//function nom q le doy (props){}
function Booleano (props) { 
    return ( 
        props.isCirculo // is delante, sé q es un booleano.,
        ? <div className='figure_rojo'></div>
        : <div className='figure_verde'></div>
     
    );
}
    export default Booleano;


    
    /* OTRA MANERA SERÍA:

    funcion Bolleano ({isCirculo}){
        return ( 
        props.isCirculo 
         <div className={isCirculo  ? 'figure_rojo' : 'figure_verde'}></div>
         )
    }
     export default Booleano;
    
    */