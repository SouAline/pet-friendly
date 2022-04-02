import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import avaliar from "../img/logoAvaliar.png";
import top from "../img/logoTop.png";
import perfil from "../img/logoPerfil.png";
import inicio from "../img/logoInicio.png";
import localizacao from "../img/logoUser.png";
import user2 from "../img/logoUser2.png";

export default function Home() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to logout");
    }
  }

  return (
    <div>
      <span className="user">Olá, {currentUser.email}</span>
      <div id="topo">
        <input className="input" type="text" placeholder="Seu local"></input>
      </div>
      <div className="align">
        <button type="button" className="button-white">
          Restaurante
        </button>
        <button type="button" className="button-white">
          Praia
        </button>
        <button type="button" className="button-white">
          Shopping
        </button>
        <button type="button" className="button-white">
          Clube
        </button>
        <button type="button" className="button-white">
          Praça
        </button>
        <button type="button" className="button-white">
          Hotéis
        </button>
        <button type="button" className="button-white">
          Confeitaria
        </button>
      </div>
      <div>
        <iframe
          className="frame"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.1978077244303!2d-43.17900708556027!3d-22.906073743603134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f5fd24e0bdd%3A0x99447fc2607f1de1!2sInstituto%20Infnet%20-%20Faculdade%20de%20Tecnologia%2C%20Engenharia%2C%20Computa%C3%A7%C3%A3o%2C%20Sistemas%20e%20Produtos%20Digitais!5e0!3m2!1spt-BR!2sbr!4v1648774116043!5m2!1spt-BR!2sbr"
        ></iframe>
        <div className="icons">
          <img className="img-hover" src={inicio} alt="Logo" />
          <img className="img-hover" src={top} alt="Logo" />
          <img className="img-hover" src={avaliar} alt="Logo" />
          <img className="img-hover" src={perfil} alt="Logo" />
        </div>
      </div>
    </div>
  );
}
