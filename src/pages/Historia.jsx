import React from "react";
import Card from "../components/Cards";
import CardCab from "../components/CardCab";

export const ENCABEZADO = [
  {
    id: 1,
    titulo: "Familia Visconti",
    descrip:
      "Una de las familias más poderosas de la nobleza italiana. Su mecenazgo en las artes fue notable, encargando las primeras barajas de tarot que se conservan, iniciadas por el duque Filippo Maria Visconti.",
    img: "img/Visconti/Bianca-maria-visconti_2.jpg",
  },
  {
    id: 2,
    titulo: "Familia Sforza",
    descrip:
      "Una familia de condottieri, su ascenso se consolida con el matrimonio de Francesco Sforza y Bianca Visconti. Continuaron y completaron las barajas, por lo que las cartas, simbolizando su unión.",
    img: "img/Visconti/Franesco_Sforza_I_2.jpg",
  },
];

export const CARDS = [
  {
    id: 1,
    titulo: "Arte de Miniatura y Lujo",
    descrip:
      "Pintadas a mano con pigmentos naturales y pan de oro, como obras de arte únicas.",
    img: "img/Visconti/Fool.jpg",
  },
  {
    id: 2,
    titulo: "Retratos de la Nobleza",
    descrip:
      "Representaciones de los miembros reales de las famialias Visconti y Sforza.",
    img: "img/Visconti/KingCup.jpg",
  },

  {
    id: 3,
    titulo: "Simbología Única",
    descrip:
      "Arcanos con variaciones respecto a lo hoy se conoce.",
    img: "img/Visconti/Strength.jpg",
  },

  {
    id: 4,
    titulo: "Tamaño y Majestuosidad",
    descrip:
      "Cartas más grandes que las modernas para realzar su valor en la corte.",
    img: "img/Visconti/Cups.jpg",
  },
];

function Historia() {
  return (
    <>
    {/* <h3>historia</h3> */}
      <div className="card-caract">
        <CardCab listacardcab={ENCABEZADO} />
        <Card listacard={CARDS} />
      </div>
    </>
  );
}
export default Historia;
