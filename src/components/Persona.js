import React from "react";
import { useParams } from "react-router-dom";
export const Persona = () => {
  const { nombre = "Emanuel", apellido = "Arias" } = useParams();
  return (
    <div>
      <h1>
        Esta es la pagina de Persona: {nombre} {apellido}
      </h1>
    </div>
  );
};
