import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Navegador.css";


function Navegador() {
  return (
    <>
      <div className="nav-container">
        
       <h3>  {/* <h3> style={{ display: 'flex', alignItems: 'center', gap: '8px' }}> */}
  <svg width="80" height="100" viewBox="0 0 24 24" fill="currentColor" style={{ filter: "drop-shadow(0 0 5px rgba(0, 0, 0, 0.6))" }}>
    {/* Un grupo de 3 estrellas de 4 puntas */}
    <path d="M16.5 12.5L15 6L13.5 12.5L7 14L13.5 15.5L15 22L16.5 15.5L23 14L16.5 12.5Z" />
    <path d="M6 10L4.5 4L3 10L0 11.5L3 13L4.5 19L6 13L9 11.5L6 10Z" />
  </svg>
  Legado Arcano
</h3>
        <div className="nav-bar">
          {/* Fíjate que eliminé la etiqueta <a> interna y corregí className */}
          <NavLink className="nav-list nav-titulo" to="/">
            Home
          </NavLink>
          <NavLink className="nav-list nav-titulo" to="/historia">
            Historia
          </NavLink>
          <NavLink className="nav-list nav-titulo" to="/adivinacion">
            Adivinación
          </NavLink>
          <NavLink className="nav-list nav-titulo" to="/modernismo">
            Modernismo
          </NavLink>
          <NavLink className="nav-list nav-titulo" to="/mi-arcano">
            Tu Arcano
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navegador;