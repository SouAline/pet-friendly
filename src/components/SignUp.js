import React, { useRef, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import logo from "../img/logoMiaut.png";

export default function SignUp() {
  const nomeRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signUp } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
      history.push("/login");
      window.alert("Cadastrado com sucesso!");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <>
      <header>
        <img
          src={logo}
          id="logo"
          alt="Logo comercial Miaut. Ícone com um gato e um cachorro"
          title="Logo comercial Miaut. Ícone com um gato e um cachorro"
        />
      </header>
      {error && <Alert variant="warning">{error}</Alert>}
      <main>
        <Form onSubmit={handleSubmit} tabIndex="1">
          <Form.Group id="name">
            <label hidden for="signupname">
              Nome
            </label>
            <Form.Control
              id="signupname"
              type="name"
              placeholder="Nome"
              ref={nomeRef}
              tabIndex="0"
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group id="signup-email">
            <Form.Label hidden for="signupemail">
              Email
            </Form.Label>
            <Form.Control
              id="signupemail"
              className="margin"
              type="email"
              placeholder="E-mail"
              ref={emailRef}
              tabIndex="1"
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label hidden for="signupPassword">
              Password
            </Form.Label>
            <Form.Control
              id="signupPassword"
              className="margin"
              type="password"
              placeholder="Senha"
              ref={passwordRef}
              tabIndex="2"
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group id="check-password">
            <Form.Label hidden for="checkpassword">
              Password
            </Form.Label>
            <Form.Control
              id="checkpassword"
              className="margin"
              type="password"
              placeholder="Confirme a senha"
              ref={passwordConfirmRef}
              tabIndex="3"
              required
            ></Form.Control>
          </Form.Group>
          <Button
            disabled={loading}
            id="button-orange"
            className="w-100 mt-4"
            type="submit"
            role="Cadastrar"
          >
            Cadastrar
          </Button>
        </Form>
      </main>

      <footer className="w-100 text-center mt-2">
        <Link className="link-none-decoration" to="/login">
          Voltar
        </Link>
      </footer>
    </>
  );
}
