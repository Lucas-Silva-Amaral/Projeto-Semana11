import client from "../providers/client"

const userId = process.env.REACT_APP_ID_USER

// const userId = "0xql5hi"

export const listPets = async () => client.get(`/pets/${userId}`)
export const delPet = async (id) => client.delete(`/pets/${userId}/${id}`)
export const createPet = async (data) => client.post(`/pets/${userId}`, data)
