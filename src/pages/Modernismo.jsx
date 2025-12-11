import React from "react";
import CardCab from "../components/CardCab";
import Card from "../components/Cards";

const ENCABEZADO = [
  {
    id: 1,
    titulo: "Arthur Waite",
    descrip:
      "Ocultista y escritor que concibió el mazo Rider-Waite, estableciendo su profundo simbolismo esotérico y revolucionando la lectura del tarot.",
    img: "img/Waite/Waite_2.jpg",
  },
  {
    id: 2,
    titulo: "Pamela Colman Smith",
    descrip:
      "Ilustró por completo el mazo de tarot Rider-Waite-Smith, siendo la primera en crear escenas narrativas para los arcanos menores, haciéndolos más intuitivos.",
    img: "img/Waite/Colman_2.jpg",
  },
];

export const CARDS = [
  {
    id: 1,
    titulo: "Simbolismo Esotérico",
    descrip:
      "Diseñado cuidadosamente por Waite para incluir simbolismo ocultista.",
    img: "img/Waite/Fool.jpg",
  },
  {
    id: 2,
    titulo: "Escenas Narrativas",
    descrip:
      "Pamela Colman Smith dibuja escenas que facilitan su compresión.",
    img: "img/Waite/KingCup.jpg",
  },

  {
    id: 3,
    titulo: "Nueva numeración",
    descrip: "El cambio intencional de posición de ciertos Arcanos Mayores.",
    img: "img/Waite/Strength.jpg",
  },

  {
    id: 4,
    titulo: "Palabras Clave Visuales",
    descrip:
      "Diseño intuitivo sin necesidad de memorización.",
    img: "img/Waite/Cups.jpg",
  },
];

function Modernismo() {
  return (
    <>
      {/* <h1>La Revolución Ilustrada</h1> */}
      <div className="card-caract">
        <CardCab listacardcab={ENCABEZADO} />
        <Card listacard={CARDS} />
      </div>
      {/* <div className="card-caract">
      </div> */}
    </>
  );
}

export default Modernismo;
