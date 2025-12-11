import React, { useState } from "react";
import { majorArcana } from "../pages/tarotData"; // Importamos los datos

const ArcanumCalculator = () => {
  // guardar la fecha
  const [date, setDate] = useState("");

  // Estado para guardar la carta resultante (objeto completo o null)
  const [myCard, setMyCard] = useState(null);

  const calculateArcana = (e) => {
    e.preventDefault(); // Evitamos que la página se recargue (comportamiento default de forms)

    if (!date) return;

    // 1. Quitamos los guiones
    const numbers = date.replace(/-/g, "");

    // 2. Sumamos todos los dígitos iniciales
    // Convertimos string a array, y reducimos sumando valores enteros
    let sum = numbers.split("").reduce((acc, curr) => acc + parseInt(curr), 0);

    // 3. Lógica de reducción recursiva (mientras sea mayor a 21)
    while (sum > 21) {
      sum = sum
        .toString()
        .split("")
        .reduce((acc, curr) => acc + parseInt(curr), 0);
    }

    if (sum === 22) sum = 0;

    // 4. Buscamos la carta en nuestro array de datos
    const resultCard = majorArcana.find((card) => card.id === sum);

    // 5. Actualizamos el estado para mostrar la carta
    setMyCard(resultCard);
  };

  return (
    <>
      <div className="tarot-container">
        <form onSubmit={calculateArcana} className="tarot-form">
          <label>Fecha de Nacimiento:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <button type="button" onClick={calculateArcana}>
            Revelar Destino
          </button>
          {/* <img src="./img/fondo.jpg" alt="" /> */}
        </form>
        {myCard && (
          <div className="card-display">
            <h3>
              Tu número de Arcanos es: {myCard.id} - {myCard.name}
            </h3>
            <div className="card-frame">
              <img src={myCard.image} alt={myCard.name} />
              <p>{myCard.desc}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ArcanumCalculator;
