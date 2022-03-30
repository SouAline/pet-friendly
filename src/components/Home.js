import React, { useState } from "react"
import {Card, Button, Alert} from "react-bootstrap"
import {useAuth} from "../contexts/AuthContext"
import {useHistory} from "react-router-dom"

export default function Home() {
    const [error, setError] = useState('')
    const {currentUser, logout} = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError('')
        try {
            await logout()
            history.push('/login')
        } catch {
            setError('Failed to logout')
        }
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Home</h2>
                    {error && <Alert variant="warning">{error}</Alert>}
                    <strong>Email:</strong> {currentUser.email}
                    <Button className="btn btn-primary w-100 mt-4" onClick={handleLogout}>Logout</Button>
                </Card.Body>
            </Card>
        </>
    )
}