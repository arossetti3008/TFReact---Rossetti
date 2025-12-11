import React, { useState } from "react";
import Card from "../components/Cards";
import CardCab from "../components/CardCab";

export const ENCABEZADO = [
  {
    id: 1,
    titulo: "Jean-Baptiste Alliette",
    descrip:
      "Conocido como Etteilla, fue el primero en transformar el tarot de un juego de cartas a una herramienta de adivinación con la publicación de su manual en 1781.",
    img: "img/Marsella/Alliette_2.jpg",
  },
  {
    id: 2,
    titulo: "Antoine Court de Gébelin",
    descrip:
      "Conectó los arcanos mayores del tarot con la Cábala y el alfabeto hebreo. Así, convirtió el tarot en un libro místico y una clave para la comprensión del universo, influyendo en los mazos modernos.",
    img: "img/Marsella/Gebelin_2.jpg",
  },
];

export const CARDS = [
  {
    id: 1,
    titulo: "Estética Xilográfica",
    descrip: "Líneas gruesas, sencillas y uso de colores primarios planos.",
    img: "img/Marsella/Fool.jpg",
  },
  {
    id: 2,
    titulo: "Arcanos Arquetípicos",
    descrip:
      "Figuras que establecieron el simbolismo esotérico estándar para la lectura.",
    img: "img/Marsella/KingCup.jpg",
  },

  {
    id: 3,
    titulo: "La Numeración Clásica",
    descrip:
      "Se cambia el orden tradicional siendo ahora La Justicia el VIII y La Fuerza el XI.",
    img: "img/Marsella/Strength.jpg",
  },

  {
    id: 4,
    titulo: "Arcanos Menores",
    descrip:
      "Solo muestran la disposición de los símbolos (copas, espadas) sin escena ni historia.",
    img: "img/Marsella/Cups.jpg",
  },
];

function Adivinacion() {
  return (
    <>
      {/* <h1>El Canon de la Adivinación</h1> */}
      {/* <div><CardCab listacardcab={ENCABEZADO}/></div> */}
      <div className="card-caract">
        <CardCab listacardcab={ENCABEZADO} />
        <Card listacard={CARDS} />
      </div>
    </>
  );
}

export default Adivinacion;
