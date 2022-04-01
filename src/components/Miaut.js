import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logoMiaut.png";

export default function Miaut() {
  return (
    <div>
      <div>
        <div>
          <img src={logo} id="logo" alt="Logo" />
        </div>
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
