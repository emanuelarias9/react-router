import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { Home } from "../components/Home";
import { Articulos } from "../components/Articulos";
import { Contacto } from "../components/Contacto";
import { Error404 } from "../components/Error404";

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/articulos" element={<Articulos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};
