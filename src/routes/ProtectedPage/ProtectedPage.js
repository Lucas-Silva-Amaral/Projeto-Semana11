import React from "react"
import { Link } from "react-router-dom"

export default function ProtectedPage() {
  return (
    <div>
      <h1>Privado</h1>
      <Link to="/pets">Cadastrar Pet</Link>
    </div>
  )
}
