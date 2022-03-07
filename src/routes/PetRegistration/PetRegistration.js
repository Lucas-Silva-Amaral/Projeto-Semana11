import React, { useState } from "react"
import { Link } from "react-router-dom"
import { createPet } from "../../services/pets"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function PetRegistration() {
  const [form, setForm] = useState({
    name: "",
    breed: "",
    age: "",
    species: "",
    gender: "",
    url: "",
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  console.log(form)

  const onSubmit = async (event) => {
    event.preventDefault()
    try {
      await createPet(form)
      setForm({
        name: "",
        breed: "",
        age: "",
        species: "",
        gender: "",
        url: "",
      })
      toast.success("Pet Cadastrado com sucesso!")
    } catch (error) {
      console.log(error.message)
      toast.warn("Erro ao cadastrar o pet")
    }
  }

  return (
    <div>
      <ToastContainer theme="colored" />
      <form onSubmit={onSubmit}>
        <div>
          <label>Nome: </label>
          <input
            value={form.name}
            type="text"
            name="name"
            placeholder="Digite o nome do Pet"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Raça: </label>
          <input
            type="text"
            name="breed"
            value={form.breed}
            placeholder="Digite a raça do Pet"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Idade: </label>
          <input
            type="number"
            name="age"
            placeholder="Digite a idade do Pet"
            value={form.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Espécie: </label>
          <select name="species" value={form.species} onChange={handleChange}>
            <option></option>
            <option value="gato" onChange={handleChange}>
              Gato
            </option>
            <option value="cachorro" onChange={handleChange}>
              Cachorro
            </option>
          </select>
        </div>
        <div>
          <label>Gênero: </label>
          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            placeholder="Gênero"
          >
            <option></option>
            <option value="macho" onChange={handleChange}>
              Macho
            </option>
            <option value="fêmea" onChange={handleChange}>
              Fêmea
            </option>
          </select>
        </div>
        <div>
          <label>Imagem: </label>
          <input
            type="text"
            name="url"
            value={form.url}
            placeholder="Digite a url da imagem do Pet"
            onChange={handleChange}
          />
        </div>
        <button onClick={() => onSubmit} type={`submit`}>
          Cadastrar
        </button>
      </form>

      <Link to="/pets/0xql5hi">Lista de Pets</Link>
    </div>
  )
}
