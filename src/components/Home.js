import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import avaliar from "../img/logoAvaliar.png";
import top from "../img/logoTop.png";
import perfil from "../img/logoPerfil.png";
import inicio from "../img/logoInicio.png";

export default function Home() {
  const { currentUser } = useAuth();

  return (
    <>
      <header>
        <h1 hidden>Home</h1>
        <span className="user">Olá, {currentUser.email.substring(0,currentUser.email.indexOf('@')).toUpperCase()}</span>
        <div id="topo">
          <label forhtml="search" aria-labelledby="search" hidden> Busca</label>
          <input className="input" type="text" placeholder="Seu local" id="search"></input>
        </div>
      <section className="align">
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
      </section>
      </header>
      <main>
        <iframe
          className="frame"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.1978077244303!2d-43.17900708556027!3d-22.906073743603134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f5fd24e0bdd%3A0x99447fc2607f1de1!2sInstituto%20Infnet%20-%20Faculdade%20de%20Tecnologia%2C%20Engenharia%2C%20Computa%C3%A7%C3%A3o%2C%20Sistemas%20e%20Produtos%20Digitais!5e0!3m2!1spt-BR!2sbr!4v1648774116043!5m2!1spt-BR!2sbr"
        ></iframe>
        </main>
        <footer className="icons">
          <img className="img-hover" src={inicio} alt="Ícone de direcionamento para a Home" />
          <Link to="/top10"><img className="img-hover" src={top} alt="Ícone de direcionamento para o Topo" /></Link>
          <Link to="/rate"><img className="img-hover" src={avaliar} alt="Ícone de direcionamento para a Avaliação" /></Link>
          <Link to="/profile"><img className="img-hover" src={perfil} alt="Ícone de direcionamento para o perfil" /></Link>
        </footer>
      
    </>
  );
}