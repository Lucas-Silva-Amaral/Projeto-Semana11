import React, { useEffect, useState } from "react"
import { listPets, delPet } from "../services/pets"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import bgTexture from "../assets/image/bg-texture.png"

export const ListPets = () => {
  const [pets, setPets] = useState([])
  const [isLoading, setIsLoding] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const request = async () => {
      setIsLoding(true)
      const response = await listPets()
      setPets(response.data.pets)
      setIsLoding(false)
    }

    request()
  }, [])

  const handleDeleteItem = async (id) => {
    try {
      await delPet(id)
      const newValue = pets.filter((item) => item.id !== id)
      setPets(newValue)
      console.log(newValue)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Container>
      <BTNC onClick={() => navigate("/pets")}>Cadastrar Pet </BTNC>
      {isLoading ? (
        <h1>...Carregando</h1>
      ) : (
        <>
          <H2>Lista de pets</H2>
          {pets.length === 0 && (
            <>
              <h2>Nenhum pet cadastrado</h2>
              <Link to={`/pets`}>Criar um pet</Link>
            </>
          )}
          {pets.lenght !== 0 && (
            <ContainerList>
              {pets?.map((pet) => (
                <List key={pet.id}>
                  <div>
                    <li>Nome: {pet.name}</li>
                    <li>Raça: {pet.breed}</li>
                    <li>Idade: {pet.age}</li>
                    <li>Espécie: {pet.species}</li>
                    <li>Gênero: {pet.gender}</li>
                  </div>
                  <img src={pet.url} alt={pet.name} />
                  <button onClick={() => handleDeleteItem(pet.id)}>X</button>
                </List>
              ))}
            </ContainerList>
          )}
        </>
      )}
    </Container>
  )
}

const H2 = styled.h2`
  text-align: center;
  font-size: 5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  z-index: 99999;
`

const Container = styled.div`
  min-height: 100vh;
  max-height: auto;
  padding: 1rem;
`

const ContainerList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
`
const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 50px;
  background-color: #2c2c6c;
  border-radius: 10px;
  padding: 50px;
  box-shadow: 10px 6px 20px 2px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  position: relative;
  div {
    li {
      font-size: 20px;
      color: #333;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      line-height: 2.5;
      font-weight: bold;
      color: #fff;
    }
  }

  img {
    max-width: 250px;
    max-height: 200px;
  }

  button {
    padding: 10px;
    border-radius: 50%;
    position: absolute;
    font-size: 15px;
    font-weight: bold;
    background-color: #ff0243;
    top: -5px;
    right: -5px;
    border: none;
    cursor: pointer;
    background-color: white;
    transition: all 600ms ease;
    &:hover {
      background-color: #ff0000;
      transform: scale(1.1);
      transition: all 600ms ease;
    }
  }
`

const BTNC = styled.button`
  background-color: #fff;
  border: none;
  padding: 10px;
  border-radius: 10px;
  font-size: 1.1rem;
  align-items: center;
  cursor: pointer;
  position: absolute;
  top: 10px;
  left: 10px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen;
  font-weight: bold;
  transition: all 600ms ease;
  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
    transition: all 600ms ease;
    transform: scale(1.1);
  }
`
