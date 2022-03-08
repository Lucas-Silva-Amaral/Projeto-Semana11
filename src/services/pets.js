import client from "../providers/client"

export const userId = process.env.REACT_APP_ID_USER

export const listPets = async () => client.get(`pets/${userId}`)

export const createPet = async (data) => {
  client.post(`pets/${userId}`, data)
}

export const delPet = async (id) => {
  client.delete(`pets/${userId}/${id}`)
}
