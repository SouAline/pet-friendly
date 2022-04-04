import React, { useRef, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import logo from "../img/logoMiaut.png";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/home");
    } catch {
      setError("Failed to signIn");
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
      <main className="teste">
        <Form onSubmit={handleSubmit} tabIndex="1">
          <Form.Group id="email">
            <Form.Label hidden aria-labelledby="email" for="login-email">
              Email
            </Form.Label>
            <Form.Control
              id="login-email"
              name="email"
              type="email"
              placeholder="E-mail"
              ref={emailRef}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group id="password">
            <Form.Label hidden aria-labelledby="password" for="login-password">
              Password
            </Form.Label>
            <Form.Control
              id="login-password"
              className="margin"
              type="password"
              placeholder="Senha"
              ref={passwordRef}
              required
            ></Form.Control>
          </Form.Group>
          <Button
            disabled={loading}
            id="button-orange"
            className="w-100 mt-4"
            type="submit"
            role="Entrar"
          >
            Entrar
          </Button>
        </Form>
      </main>

      <footer className="w-100 text-center mt-2">
        <Link className="link-none-decoration" to="/signUp">
          Primeiro Acesso
        </Link>
      </footer>
    </>
  );
}
