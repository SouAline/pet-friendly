import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import avaliar from "../img/logoAvaliar.png";
import top from "../img/logoTop.png";
import perfil from "../img/logoPerfil.png";
import inicio from "../img/logoInicio.png";

export default function Confeitaria() {
  const { currentUser } = useAuth();

  return (
    <div>
      <span className="user">Olá, {currentUser.email.substring(0,currentUser.email.indexOf('@')).toUpperCase()}</span>
      <div id="topo">
        <input className="input" type="text" placeholder="Seu local"></input>
      </div>
      <div className="align">
        <Link to="/home"><button type="button" className="button-white">
          Restaurante
        </button></Link>
        <Link to="/praia"><button type="button" className="button-white">
          Praia
        </button></Link>
        <Link to="/shopping"><button type="button" className="button-white">
          Shopping
        </button></Link>
        <Link to="/clube"><button type="button" className="button-white">
          Clube
        </button></Link>
        <Link to="/praca"><button type="button" className="button-white">
          Praça
        </button></Link>
        <Link to="/hoteis"><button type="button" className="button-white">
          Hotéis
        </button></Link>
        <Link to="/confeitaria"><button type="button" className="button-white">
          Confeitaria
        </button></Link>
      </div>
      <div>
      <iframe className="frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.2217153996244!2d-43.18093458556029!3d-22.905191643571456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f5e77ab6549%3A0x81b2f18ee625c6da!2sConfeitaria%20Colombo!5e0!3m2!1spt-BR!2sbr!4v1649112401507!5m2!1spt-BR!2sbr"></iframe>
        <div className="icons">
          <img className="img-hover" src={inicio} alt="Logo" />
          <Link to="/top10"><img className="img-hover" src={top} alt="Logo" /></Link>
          <Link to="/rate"><img className="img-hover" src={avaliar} alt="Logo" /></Link>
          <Link to="/profile"><img className="img-hover" src={perfil} alt="Logo" /></Link>
        </div>
      </div>
    </div>
  );
}
