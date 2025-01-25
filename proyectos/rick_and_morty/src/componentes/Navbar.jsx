import React from "react";

const Navbar = ({ brand, filterAlive, filterDead, showAll}) => {

return (
    <div className="navbar navbar-dark bg-dark">
        <div className='container'>
            <a className="navbar-brand text-uppercase" href="/">{brand}</a>

            <div className="nav pull-right">
                <button className="btn btn-primary navbar-btn" onClick={showAll}>Filter All Characters</button>
                <button className="btn btn-primary navbar-btn" onClick={filterAlive}>Filter Alive Characters</button>
                <button className="btn btn-primary navbar-btn" onClick={filterDead}>Filter Dead Characters</button>

            </div>
        </div>
    </div>


   
    )
}
export default Navbar


