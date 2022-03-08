import React from "react"
import { useEffect } from "react"
import { listPets } from "../services/pets"
import { Link } from "react-router-dom"
import { userId } from "../services/pets"

export default function ProtectedPage() {
  useEffect(() => {
    const request = async () => {
      const response = await listPets()
      console.log(response)
    }

    request()
  })

  return (
    <div>
      <Link to={`/pets`}>
        <h3>Cadastrar um pet</h3>
      </Link>
      <Link to={`/${userId}`}>
        <h3>Lista de pets</h3>
      </Link>
    </div>
  )
}
