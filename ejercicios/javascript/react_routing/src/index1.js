import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//import Movies from "./components/pages/Movies";
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

//import Series from "./components/pages/Series";
import Navbar from "./Navbar";
//import Home from './components/pages/Home';
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <App />
  </BrowserRouter>,
);
/*

*/



/*
ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" component={App} />
      <Route path="/movies" component={Movies} />
      <Route path="/series" element={<Series />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
*/
/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/

/* 
        ReactDOM.render(
          <React.StrictMode>
             <BrowserRouter>
                <Router>
                    <Route exact path="/" component={App} />
                    <Route path="/series" component={Series} />
                </Router>
            </BrowserRouter>
          </React.StrictMode>,
          document.getElementById('root')
        )

        */
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

/*

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<App />);

*/
