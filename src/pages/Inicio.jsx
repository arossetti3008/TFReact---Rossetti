import React from "react";
import Home from "../components/Home";

const PRINCIPAL = [
  {
    id: 1,
    titulo: "Lectura del Tarot en el Siglo XV",
    subtitle: "",
    descrip:
      "La baraja de tarot Visconti-Sforza es una de las más antiguas y famosas que se conservan. Creada en el siglo XV en Milán, fue un encargo de la poderosa familia Visconti para celebrar el matrimonio entre Bianca Maria Visconti y Francesco Sforza. Sus naipes, lujosamente ilustrados, son considerados los prototipos de las barajas de tarot modernas y un testimonio del arte y la opulencia del Renacimiento italiano.",
    img: "../img/jugadores-de-tarot.jpg",
  },

  {
    id: 2,
    titulo: "El Tarot de Marsella",
    subtitle: "La creación de los Arquetipos",
    descrip:
      "Es una categoría de diseños de tarot que florecieron en Francia (especialmente en Marsella) y otras regiones europeas a partir del siglo XVII. Se considera el antecesor directo y más influyente de la mayoría de los mazos de tarot. se caracteriza por sus ilustraciones de estilo xilográfico (grabado en madera) con una paleta de colores distintiva (rojos, azules, amarillos y verdes). Sus Arcanos Mayores presentan figuras y escenas icónicas (El Loco, La Papisa, La Torre, etc.) que se han mantenido notablemente consistentes a lo largo de los siglos.",
    img: "../img/adivinacion.jpg",
  },
  {
    id: 3,
    titulo: "Las cartas Rider-Waite-Smith",
    descrip:
      "Creado a principios del siglo XX (publicado en 1909), fue el resultado de la colaboración entre el místico y ocultista Arthur Edward Waite (quien concibió el simbolismo) y la talentosa artista Pamela Colman Smith (quien realizó las icónicas ilustraciones). su éxito radica en que, por primera vez, todos los 78 Arcanos (Mayores y Menores) están completamente ilustrados con escenas narrativas.",
    img: "../img/waite.jpg",
  },
];

function Inicio() {
  return (
    <div className="card-caract">
      <Home ListaHome={PRINCIPAL} />
    </div>
  );
}

export default Inicio;
