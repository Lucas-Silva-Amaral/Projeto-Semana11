import React, { useState } from "react"
import { createPet } from "../services/pets"
import { userId } from "../services/pets"
import { Link } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import styled from "styled-components"

export const RegisterPets = () => {
  const [form, setForm] = useState({
    name: "",
    breed: "",
    age: "",
    species: "",
    gender: "",
    url: "",
  })

  const [preview, setPreview] = useState([])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  console.log(form)

  const onSubmit = async (event) => {
    event.preventDefault()
    try {
      if (
        form.name === "" ||
        form.breed === "" ||
        form.age === "" ||
        form.species === "" ||
        form.gender === "" ||
        form.url === ""
      ) {
        toast.error("Preencha todos os campos!")
      } else {
        await createPet(form)
        toast.success("Pet cadastrado com sucesso!")
        setPreview(form)
      }
      setForm({
        name: "",
        breed: "",
        age: "",
        species: "",
        gender: "",
        url: "",
      })
    } catch (error) {
      console.log(error.message)
      toast.warn("Erro ao cadastrar o pet")
    }
  }

  return (
    <Container>
      <ToastContainer theme="colored" />
      <h2>Cadastrar um pet</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Nome:</label>
          <input
            placeholder="Digite o nome do pet"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Raça:</label>
          <input
            placeholder="Digite a raça do pet"
            type="text"
            name="breed"
            value={form.breed}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Idade:</label>
          <input
            placeholder="Digite a idade do pet"
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Especie:</label>
          <select name="species" value={form.species} onChange={handleChange}>
            <option value=""></option>
            <option value="Cachorro">Cachorro</option>
            <option value="Gato">Gato</option>
          </select>
        </div>
        <div>
          <label>Gênero:</label>
          <select name="gender" value={form.gender} onChange={handleChange}>
            <option value=""></option>
            <option value="Macho">Macho</option>
            <option value="Fêmea">Fêmea</option>
          </select>
        </div>
        <div>
          <label>Image:</label>
          <input
            placeholder="Digite a url da imagem do pet"
            type="text"
            name="url"
            value={form.url}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
      <ListPets>Listar Pets</ListPets>
      {preview.name && (
        <Preview>
          <h4>Último pet cadastrado</h4>
          <div>
            <ul>
              <li>Nome: {preview.name}</li>
              <li>Raça: {preview.breed}</li>
              <li>Idade: {preview.age}</li>
              <li>Especie: {preview.species}</li>
              <li>Gênero: {preview.gender}</li>
            </ul>
            <img src={preview.url} alt={preview.name} />
          </div>
        </Preview>
      )}
    </Container>
  )
}

const Container = styled.div`
  min-height: 50vh;
  max-height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: relative;

  h2 {
    text-align: center;
    font-size: 5rem;
    font-weight: bold;
    margin-bottom: 2rem;
    margin-bottom: 50px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    box-sizing: border-box;

    div {
      display: flex;
      flex-direction: column;

      label {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
      }

      input {
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 0.5rem;
        margin-bottom: 0.5rem;
        font-size: 1.5rem;
        width: 100%;
        box-sizing: border-box;
        transition: 0.3s;
        &:focus {
          border: none;
          outline: none;
          transition: 0.5s;
        }
      }

      select {
        display: flex;
        justify-content: flex-start;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 0.5rem;
        margin-bottom: 0.5rem;
        font-size: 1.5rem;
        width: 100%;

        option {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
      }
    }

    button {
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 0.5rem;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      font-size: 1.5rem;
      width: 100%;
      background: #ccc;
      color: #000;
      font-weight: bold;
      cursor: pointer;
    }
  }
`
const ListPets = styled(Link).attrs({
  to: `/${userId}`,
})`
  text-decoration: none;
  background-color: #fff;
  border: none;
  padding: 20px;
  border-radius: 5px;
  font-size: 1.1rem;
  align-items: center;
  cursor: pointer;
  position: absolute;
  top: 50px;
  left: 50px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen;
  font-weight: bold;
  transition: all 600ms ease;
  color: #000;
  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
    transition: all 600ms ease;
    transform: scale(1.1);
  }
`

const Preview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

  h4 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  div {
    display: flex;
    gap: 10rem;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    padding: 20px;
    margin-bottom: 20px;

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;

      li {
        font-size: 1.5rem;
        font-weight: bold;
        line-height: 1.5;
      }

      img {
        max-width: 100%;
      }
    }
  }
`
