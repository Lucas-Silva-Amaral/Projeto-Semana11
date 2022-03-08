import React from "react"
import { useAuth } from "../../context/auth-context"
import { useLocation, useNavigate } from "react-router-dom"
import { ContainerForm, ContentForm, Label, Input, BtnLogin } from "./styles"
import { Navigate } from "react-router-dom"
import { userId } from "../../services/pets"

export default function FormLogin() {
  const auth = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state?.from?.pathname || "/"

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const email = formData.get("email")
    const password = formData.get("password")

    const data = {
      email,
      password,
    }
    auth.login(data, () => navigate(from, { replace: true }))
    navigate(`/${userId}`)
  }

  return (
    <ContainerForm>
      <form onSubmit={handleSubmit}>
        <ContentForm>
          <Label>E-mail:</Label>
          <Input type="email" name="email" />
        </ContentForm>
        <ContentForm>
          <Label>Senha:</Label>
          <Input type="password" name="password" />
        </ContentForm>
        <BtnLogin type="submit" onClick={() => Navigate("/pets")}>
          Login
        </BtnLogin>
      </form>
    </ContainerForm>
  )
}
