import React from "react"
import FormLogin from "../FormLogin"
import { Container, BackGroundLogin, ContainerLogin, Title } from "./styles"

export const Header = () => {
  return (
    <Container>
      <BackGroundLogin />
      <ContainerLogin>
        <Title>Fours Patas</Title>
        <FormLogin />
      </ContainerLogin>
    </Container>
  )
}
