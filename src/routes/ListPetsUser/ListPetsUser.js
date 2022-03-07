import React, { useEffect, useState } from "react"
import { listPets, delPet } from "../../services/pets"
import { toast, ToastContainer } from "react-toastify"
import { H1, Container, ListPets, AboutPet, Button, Image } from "./style"
import "react-toastify/dist/ReactToastify.css"

export default function ListPetsUser() {
  const [pets, setPets] = useState([])

  useEffect(() => {
    const request = async () => {
      try {
        const response = await listPets()
        setPets(response.data.pets)
      } catch (error) {
        console.log(error.message)
      }
    }
    request()
  }, [])

  const handleDelete = async (id) => {
    try {
      await delPet(id)
      const newPets = pets.filter((pet) => pet.id !== id)
      setPets(newPets)
      toast.success("Pet Removido com sucesso!")
    } catch (error) {
      console.log(error.message)
      toast.warn("Erro ao remover o conteudo")
    }
  }

  return (
    <>
      <ToastContainer theme="colored" />
      <H1>Lista de Pets</H1>
      <Container>
        {pets?.map((pet) => (
          <ListPets key={pet.id}>
            <Image src={pet.url} alt={pet.name} />
            <AboutPet>
              <li>Nome: {pet.name}</li>
              <li>Raça: {pet.breed}</li>
              <li>Idade: {pet.age}</li>
              <li>Espécie: {pet.species}</li>
              <li>Gênero: {pet.gender}</li>
            </AboutPet>
            <Button onClick={() => handleDelete(pet.id)}>X</Button>
          </ListPets>
        ))}
      </Container>
    </>
  )
}
