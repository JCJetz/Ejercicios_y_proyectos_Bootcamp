import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*PASO CINCO */

/*
function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />

    </section>
  );
}

function Book() {
  return (
    <article >
      <Image />
      <Title />
      <Author />
    </article>
  );
}

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/71zwHcw-D7L._AC_UL600_SR600,400_.jpg
"
    alt="I Will Teach You to Be Rich"
  />
);
const Title = () => <h2> I Will Teach You to Be Rich </h2>;
const Author = () => {
  return <h4>Ramit Sethi</h4>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);

*/

/*PASO TRES
function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
    </section>
  );
}

function Book() {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
}

const Image = () => <h2>Image placeholder</h2>;
const Title = () => <h2> Title of the book </h2>;
const Author = () => {
                       return <h4>Author</h4>;
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);


Paso 4 sustituyo const por datos de:
https://www.amazon.com/Best-Seller-Books/zgbs/books

<img src="https://images-na.ssl-images-amazon.com/images/I/71zwHcw-D7L._AC_UL600_SR600,400_.jpg
" alt="I Will Teach You to Be Rich"/>
)
const Title = () => <h2> I Will Teach You to Be Rich </h2>;
const Author = () => {
                       return <h4>Ramit Sethi</h4>;
};

 */

/*Puedo sustituir el primer div por <React.Fragment> or <> </> */
/*PASO DOS 
function Greeting() {
  return( 
 <React.Fragment>
<div classnAme="div_dos">
  <h2>Holoiii</h2> 
  <ul>
    <li>
      <a href='#'>Holi mundo</a>
    </li>
  </ul>
</div>
<h2>adeeeu</h2> 
</React.Fragment>
  )
};  

const root = ReactDOM.createRoot(document.
  getElementById("root"));

  root.render(<Greeting />);
*/

/* Paso uno
function Greeting() {
  return( 
<div>
  <Movies />
  <Series />
</div>
  )
}

const Movies = () => <h2>Movies Pedro Puertas</h2>
const Series = () => {
return
<p>Mesaje dsd return </p>;
};


const root = ReactDOM.createRoot(document.
  getElementById("root"));

  root.render(<Greeting />);

*/

/*
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
*/
