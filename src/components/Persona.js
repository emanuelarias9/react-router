import React from "react";
import { useNavigate, useParams } from "react-router-dom";
export const Persona = () => {
  const { nombre = "Emanuel", apellido = "Arias" } = useParams();
  const nav = useNavigate();
  const enviar = (e) => {
    e.preventDefault();
    let nombre = e.target.nombre.value;
    let apellido = e.target.apellido.value;
    let url = `/persona/${nombre}/${apellido}`;
    nav(url);
    if (nombre.length <= 0 && apellido <= 0) {
      nav("/home");
    } else if (nombre === "contacto" || apellido === "contacto") {
      nav("/contacto");
    } else {
      nav(url);
    }
  };
  return (
    <div>
      <h1>
        Esta es la pagina de Persona: {nombre} {apellido}
        <form onSubmit={enviar}>
          <input type="text" name="nombre" />
          <input type="text" name="apellido" />
          <input type="submit" name="enviar" value="Enviar" />
        </form>
      </h1>
    </div>
  );
};
