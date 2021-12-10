import "./App.css";
import Menu from "./Menu/Menu";
import Inicio from "./Inicio";
import Usuario from "./Usuarios/Usuario";
import FormUsuario from "./Usuarios/FormUsuario";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Login/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/Usuario" element={<Usuario />} />
        <Route path="/formUsuario" element={<FormUsuario />} />
        <Route path="/formUsuario/:cedula" element={<FormUsuario />} />
        {/* /* path es la ruta href  y elemnt el nombre del componente*/}
      </Routes>
    </Router>
  );
}

export default App;
