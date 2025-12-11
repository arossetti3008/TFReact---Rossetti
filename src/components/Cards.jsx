import React from "react";

function Card({ listacard }) {
  return (
    <>
      {/* <h2 className="card-title">Caráctarísticas</h2> */}
      {/* <div className="card-titulo">Estilos de las cartas</div> */}
      <div className="card-content">
        {listacard.map((item) => (
          <div className="card-prop" key={item.id}>
            <img className="card-img" src={item.img} alt={item.titulo} /> 
           
            <div className="card-text">
              <h2>{item.titulo}</h2>
              <p>{item.descrip}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
