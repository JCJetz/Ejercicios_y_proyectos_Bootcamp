/*
3. Listado de productos. Vamos a crear una página que pinte un listado de productos de telefonía movil. 
Lo primero que tenemos que aprender es a leer la documentación de un API 
(la url de acceso a la información que queremos de un servidor).
 La docu se encuentra en la siguiente URL (https://dummyjson.com/docs/products). Realizar lo siguiente:

a.Identificar la URL donde se encuentra la información que queremos pintar (listado de productos).
b.Realizar la llamada en nuestra aplicación
c.Para cada producto pintar una card como la que se muestra en la imagen. (6.png)

Opcional: Si nos fijamos bien en la respuesta ahora mismo estaríamos pintando 30 productos,
 pero la respuesta nos dice que hay 100 disponibles. 
 Leer el apartado Limit and skip products para entender como podríamos modificar la URL 
 y que el servidor nos devuelva los 100 productos a pintar.

Vamos a modificar ahora el ejercicio y antes de pintar la lista quiero que aparezca una sección que muestre la siguiente información:

Mostrar en un p cuantos TELEFONOS cuestan más de 500€
Mostrar  en otro p el precio medio de todos los productos
Mostrar la lista de nombres con los productos que tengan un rating superior a 4.5
Mostrar la lista de categorias de productos que existen

   
*/

// listado prodcts
fetch('https://dummyjson.com/products') //https://dummyjson.com/products'products?limit=100
.then(resp => resp.json())
.then(products => {
  let prods = Object.values(products)[0];
  for (const prod of prods) {
    //document.write("<br>");
    //console.log(prod.title); 

    
    
    let target_div = document.getElementsByClassName('cards_container')[0];
    //console.log(target_div);
    let div = document.createElement("div");
    
    div.className = 'card';
    let div_cards = document.createElement("div");
    div_cards.className = 'card_title';
    div_cards.innerHTML = `${prod.title}`;
    target_div.append(div);
    div.append(div_cards);

    let button = document.createElement("button");
    button.className = 'button';
    button.innerHTML = `${prod.category}`;
    div.append(button);
    //div.append(div_cards);
  }});


let stars = document.createElement("stars");
stars.className = 'stars';
stars.innerHTML = `${prod.stars}`;
    div_cards.append(div);
   div.append(card);
});




//select just phones
fetch('https://dummyjson.com/products/search?q=phone')
.then(res => res.json())
.then(console.log);



//pintar una card por producto

let section = document.createElement("section");
section.classList.add("card_container");
section.id="container";
document.body.appendChild(section);


function printCard (obj) {

}


//all product categoria
fetch('https://dummyjson.com/products/categories')
.then(res => res.json())
.then(console.log);

[
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting"
  ]
          




 baseDeDatos = [
    {
        "id": 1,
        "title": "iPhone Galaxy +1", // only title was updated
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "...",
        "images": ["...", "...", "..."]
      }        
//el 2 then es un objet y denttro un array de objetos.
//data.product.forEach(p=>)
//recorrerlo (foeach o map) En cada vuelata
    
    