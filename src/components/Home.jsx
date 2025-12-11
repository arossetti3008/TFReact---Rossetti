import React from "react";

function Home({ ListaHome }) {
  return (
    <>
      {/* <div className="hero-card-center"> */}
        <div className="hero-content">
        <p className="hero-text">
          Lejos de las predicciones y el misticismo, aquí exploraremos los orígines del tarot como un ingenioso juego de cartas en las cortes del Renacimiento italiano. Conoce su evolución a través de los siglos y cómo ha dejado una profunda huella en la cultura, el arte y el pensamiento europeo. Prepárate para descubrir un legado de símbolos e historias que trascienden el tiempo, revelando la verdadera magia detrás de estas enigmáticas ilustraciones.
        </p>   
        </div>
        <div className="hero-section">
        {ListaHome.map((item) => (
          <div className="hero-card" key={item.id}>
            {/* style={{ backgroundImage: `url(${item.img})` }}  */}
            <img className="hero-img" src={item.img} alt="" />
            <div className="hero-card-title">
              <h2>{item.titulo}</h2>
              <p>{item.descrip}</p>
            </div>
          </div>
        ))}
      </div>
      {/* </div> */}
    </>
  );
}

export default Home;
