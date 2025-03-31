import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const PanelControl = () => {
  return (
    <div>
      <h1>Panel de Control</h1>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/panel/homePanel"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/panel/gestionPanel"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Gestion
            </NavLink>
          </li>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
