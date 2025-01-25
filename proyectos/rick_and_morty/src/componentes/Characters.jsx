import React from "react";



const Characters = ({characters = [] }) => {

return (
    <div className="row">
              {/* Se itera sobre el array de characters */}
        {characters.map((item, index) => (   
            <div key= {index} className="col mb-4">
                <div className="card" style={{minWidth: "200px}"}}>
                    <img src={item.image} alt=""></img>
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p> <b>Species: </b> {item.species}</p>
                            <p> <b>Status: </b> <span className={item.status === 'Alive' ? "green" : "red" }>{item.status}</span></p>
                            <p className="location" style={{fontWeight: "500}"}}> <b> Last location: </b> {item.location.name}</p>
                            <p> <b>First seen in: </b> {item.origin.name}</p> 
                        </div>       
                    </div>
                </div>
                ))}
            </div>
            );
};


export default Characters