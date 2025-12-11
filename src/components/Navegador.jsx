import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Navegador.css";

function Navegador() {
const iconStyle = {
    marginRight: "8px",
    verticalAlign: "middle",
    fontSize: "24px", // Tamaño estándar de icono
    // filter: "drop-shadow(0 0 2px rgba(255, 215, 0, 0.5))" // Brillo dorado
  };

  // Estilo especial para el icono grande del Logo
  const logoIconStyle = {
    fontSize: "60px", // Tamaño grande para el logo
    verticalAlign: "middle",
    marginRight: "10px",
    color: "inherit", // Hereda el color del texto
    filter: "drop-shadow(0 0 5px rgba(0, 0, 0, 0.6))"
  };


  return (
    <>
      <div className="nav-container">
        <h3>
          <span className="material-symbols-outlined" style={logoIconStyle}> matter</span>
          Legado Arcano
        </h3>
        <div className="nav-bar">
          <NavLink className="nav-list nav-titulo" to="/">
           <span className="material-symbols-outlined" style={iconStyle}>
              explore
            </span>
            Inicio
          </NavLink>
          <NavLink className="nav-list nav-titulo" to="/historia">
           <span className="material-symbols-outlined" style={iconStyle}>
              hourglass</span>
            Historia
          </NavLink>
          <NavLink className="nav-list nav-titulo" to="/adivinacion">
           <span className="material-symbols-outlined" style={iconStyle}>
              hotel_class
            </span>
            Adivinación
          </NavLink>
          <NavLink className="nav-list nav-titulo" to="/modernismo">
           <span className="material-symbols-outlined" style={iconStyle}>
            Playing_Cards
            </span>
            Modernismo
          </NavLink>
          <NavLink className="nav-list nav-titulo" to="/mi-arcano">
          <span className="material-symbols-outlined" style={iconStyle}>
              Switch_Account
            </span>
            Tu Arcano
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navegador;
