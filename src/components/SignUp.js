import React, { useRef, useState } from "react"
import { Card, Form, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import logo from "../img/logoMiaut.png";

export default function SignUp() {
    const nomeRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signUp} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
            await signUp(emailRef.current.value, passwordRef.current.value)
            history.push("/login")
            window.alert("Cadastrado com sucesso!")
            
        } catch {
            setError('Failed to create an account')
        }

        setLoading(false)
    }
    
    return (
        <>
        <div> 
          <div>
            <div>
              <img src={logo} id="logo" alt="Logo" />
            </div>
            {error && <Alert variant="warning">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="nome">
                {/* <Form.Label>Email</Form.Label> */}
                <Form.Control
                  type="nome"
                  placeholder="Nome"
                  ref={nomeRef}
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group id="email">
                {/* <Form.Label>Email</Form.Label> */}
                <Form.Control
                  id="margin"
                  type="email"
                  placeholder="E-mail"
                  ref={emailRef}
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group id="password">
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control
                  id="margin"
                  type="password"
                  placeholder="Senha"
                  ref={passwordRef}
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group id="password">
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control
                  id="margin"
                  type="password"
                  placeholder="Confirme a senha"
                  ref={passwordConfirmRef}
                  required
                ></Form.Control>
              </Form.Group>
              <Button
                disabled={loading}
                id="button-orange"
                className="w-100 mt-4"
                type="submit"
              >
                Cadastrar
              </Button>
            </Form>
          </div>
        </div>
        <div className="w-100 text-center mt-2">
        <Link className="link-none-decoration" to="/login">
          Voltar
        </Link>
      </div>
      </>
    )
}