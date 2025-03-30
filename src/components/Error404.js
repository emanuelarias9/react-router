import React from "react";
import { Link } from "react-router-dom";

export const Error404 = () => {
  return (
    <div>
      <h1>Error 404</h1>
      <h2>Esta pagina no existe</h2>
      <Link to="/home">Volver al inicio</Link>
    </div>
  );
};
