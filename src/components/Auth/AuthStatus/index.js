import React from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../../context/auth-context"
import { Container, Title, BtnLogout } from "./styles"
import { Main, H1, P } from "./styles"

export default function Header() {
  const auth = useAuth()
  const navigate = useNavigate()

  if (!auth.user) {
    return (
      <Main>
        <H1>Voce ainda nao esta logado !</H1>
        <P>Click em Login para acessar !</P>
        <BtnLogout onClick={() => navigate("/login")}>Login</BtnLogout>
      </Main>
    )
  }
  return (
    <Container>
      <Title>Bem vindo {auth.user.name}!</Title>
      <BtnLogout onClick={() => auth.logout(() => navigate("/"))}>
        Sair{" "}
      </BtnLogout>
    </Container>
  )
}
