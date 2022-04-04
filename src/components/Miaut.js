import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logoMiaut.png";

export default function Miaut() {
  return (
    <div>
      <div>
        <header>
          <img src={logo} id="logo" alt="Logo comercial Miaut. Ícone com um gato e um cachorro" title="Logo comercial Miaut. Ícone com um gato e um cachorro" />
        </header>
        <Link
          to="/login"
          id="button-orange"
          className="btn btn-default w-100 mt-4"
          type="submit"
        >
          Entrar
        </Link>
        <Link id="align" className="link-none-decoration" to="/signUp">
          Primeiro Acesso
        </Link>
      </div>
    </div>
  );
}