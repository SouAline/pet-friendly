import React from "react";
import { useAuth } from "../contexts/AuthContext";


export default function Profile() {
    const { currentUser } = useAuth()

    return (
        <div>
            <span className="user">Olá, {currentUser.email}</span>
            <h2>TODO</h2>
        </div>
    )
}