import React from "react";
import { ENCABEZADO } from "../pages/Historia";
import "../css/Cards.css";
import "../css/Styles.css";

function CardCab({listacardcab}) {
  return (
    <div className="card-lateral">
      {listacardcab.map((item) => (
        <div className="card-ppal" key={item.id}>
          <img src={item.img} alt={item.titulo} />
          <div className="card-bio">
            <h2>{item.titulo}</h2>
            <p>{item.descrip}</p>
            </div>
        </div>
      ))}
    </div>
  );
}

export default CardCab;
