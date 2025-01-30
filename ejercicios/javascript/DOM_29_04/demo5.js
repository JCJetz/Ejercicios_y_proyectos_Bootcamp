/*
5.Crea un documento HTML con un body vacío,  
ahora crea un objeto de tipo city que contenga 
{imagen, nombre de la ciudad, descripción}, 
repite el proceso con varias ciudades de tu elección y con ello crea un array 
de ciudades, ahora vamos a darle vida en nuestro html:(hard)
*/

let Canberra = {
    img: 'https://weatherwatch-assets.s3.ap-southeast-2.amazonaws.com/wp-content/uploads/2020/02/23042000/picture-36077.jpg',
    nameOfTheCity: 'Canberra',
    description: 'Es la capital de Australia, con una población superior a los 345.000 habitantes.En 1913 empezó su construcción desde cero, como una ciudad planificada..'
  };
    
//document.write(Canberra.nameOfTheCity);



const Barcelona = {
    img: 'https://weatherwatch-assets.s3.ap-southeast-2.amazonaws.com/wp-content/uploads/2020/02/23042000/picture-36077.jpg',
    nameOfTheCity: 'Barcelona',
    description: 'La historia de Barcelona se extiende a lo largo de 4000 años, desde finales del Neolítico, con los primeros restos hallados en el territorio de la ciudad, hasta la actualidad. El sustrato de sus habitantes aúna a los pueblos íberos, romanos, judíos, visigodos, musulmanes y cristianos. ..'
  };
    
  //document.write(Barcelona.nameOfTheCity);


  const León = {
    img: 'https://weatherwatch-assets.s3.ap-southeast-2.amazonaws.com/wp-content/uploads/2020/02/23042000/picture-36077.jpg',
    nameOfTheCity: 'León',
    description: 'Nacida como campamento militar romano de la Legio VI Victrix hacia el 29 a. C.,su carácter de ciudad campamental se consolidó con el asentamiento definitivo de la Legio VII Gemina a partir del año 74..'
  };
    
  //document.write(León.nameOfTheCity);

/*
6.Crea una función llamada addCities que reciba un array de ciudades como parámetro 
y lo añada al DOM.
*/

let arrayCuidades = [Canberra,Barcelona,León];


function addCities (arr) { // funcion q recibe un array cualquira
    let div_cities = document.createElement('div'); // creo un div contenedor
    let anchor = document.getElementsByClassName("city_container")[0];// elijo mi anchor pá enganchar todo. getElementsByClassName con su [0]
    anchor.appendChild(div_cities);// engancho como hijo, el div q cree antes
    div_cities.className = "ciudades";// añado clase ciudades (par poder borrarlas en el ultimo ejercc)
    
    // Itero por cada elemento de entrada del array
    arr.forEach(element => { //por cada elemento del array
        //
        let each_city = document.createElement('div'); //crear div
        each_city.id = element.nameOfTheCity; // poner id a cada div sacando el nombre de nameOfTheCity
        div_cities.append(each_city); // añadirlo como hijo al div "ciudades" q cree antes de loop. 
        //creo nodo de texto con los valores de esa ciudada
        let nombre_ciudad = document.createTextNode(`Nombre: ${element.nameOfTheCity}, Imagen: ${element.img}, Descripción: ${element.img}<br>`);
        //inserto ese nodo al div del principio con el nombre_ciudad
        each_city.append(nombre_ciudad);



        //document.write(`Nombre: ${element.nameOfTheCity}, Imagen: ${element.img}, Descripción: ${element.img}<br>`);

    });

    
    //document.write(arr[0].nameOfTheCity);
};






/*
7.Crea una función llamada removeCity que reciba una ciudad como parámetro
 y borre del DOM la ciudad correspondiente.
*/


addCities(arrayCuidades);
//document.createElement

function removeCity (city) {
    let ciudad = document.getElementById(city);
    ciudad.parentNode.removeChild(ciudad);
};

/*
8.Crea una función llamada removeAllCity la cual eliminará todas las ciudades de la web.
*/
removeCity("Barcelona");

function removeAllCity() {
    let div_ciudades = document.getElementsByClassName("ciudades")[0];
    console.log(div_ciudades);
    div_ciudades.parentNode.removeChild(div_ciudades);

};

removeAllCity();
//comentado pq borra todo