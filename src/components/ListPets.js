import React, { useEffect, useState } from "react"
import { listPets, delPet } from "../services/pets"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"

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
      toast.success("Pet deletado com sucesso!")
      setPets(newValue)
      console.log(newValue)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <ToastContainer theme="dark" />
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
                <BTN onClick={() => navigate("/pets")}>Criar um pet</BTN>
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
                      <BtnDel onClick={() => handleDeleteItem(pet.id)}>
                        X
                      </BtnDel>
                    </div>
                    <img src={pet.url} alt={pet.name} />
                  </List>
                ))}
              </ContainerList>
            )}
          </>
        )}
      </Container>
    </>
  )
}

const H2 = styled.h2`
  text-align: center;
  font-size: 5rem;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 100px;
`

const Container = styled.div`
  min-height: 100vh;
  max-height: auto;
  padding: 1rem 0 5rem 0;
`

const ContainerList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
  position: relative;
`
const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 50px;
  border-radius: 5px;
  padding: 50px;
  box-shadow: 8px 10px 20px 5px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  position: relative;
  transition: 0.5s;
  &:hover {
    box-shadow: 8px 10px 20px 5px rgba(0, 0, 0, 0.5);
    transform: scale(1.3);
    transition: all 0.5s;
    background-color: #60afff;
    z-index: 1;
  }

  div {
    li {
      font-size: 20px;
      color: #333;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      line-height: 2.5;
      font-weight: bold;
      color: #000;
    }
  }

  img {
    max-width: 250px;
    max-height: 200px;
  }
`

const BtnDel = styled.button`
  padding: 10px;
  border-radius: 10px;
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
`

const BTNC = styled.button`
  background-color: #fff;
  border: none;
  padding: 20px;
  border-radius: 10px;
  font-size: 1.1rem;
  align-items: center;
  cursor: pointer;
  position: absolute;
  top: 50px;
  left: 30px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen;
  font-weight: bold;
  transition: all 600ms ease;
  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
    transition: all 600ms ease;
    transform: scale(1.1);
  }
`
const BTN = styled.button`
  background-color: #fff;
  border: none;
  padding: 15px;
  border-radius: 10px;
  font-size: 1.1rem;
  align-items: center;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen;
  font-weight: bold;
  transition: all 600ms ease;
  margin-top: 2rem;
  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
    transition: all 600ms ease;
    transform: translate3d(20px, 0, 0);
  }
`
