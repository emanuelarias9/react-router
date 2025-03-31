import React from "react";
import {
  Routes,
  Route,
  NavLink,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import { Home } from "../components/Home";
import { Articulos } from "../components/Articulos";
import { Contacto } from "../components/Contacto";
import { Error404 } from "../components/Error404";
import { Persona } from "../components/Persona";
import { PanelControl } from "../components/PanelControl";
import { HomePanel } from "../components/panel/HomePanel";
import { GestionPanel } from "../components/panel/GestionPanel";

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/articulos"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Articulos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacto"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contacto
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Panel"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Panel
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/articulos" element={<Articulos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/persona" element={<Persona />} />
        <Route path="/persona/:nombre" element={<Persona />} />
        <Route path="/persona/:nombre/:apellido" element={<Persona />} />
        <Route path="/redirect" element={<Navigate to="/persona/aksudh" />} />
        <Route path="/panel/*" element={<PanelControl />}>
          <Route path="homePanel" element={<HomePanel />} />
          <Route path="gestionPanel" element={<GestionPanel />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};
