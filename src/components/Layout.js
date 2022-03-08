import React from "react"
import { Outlet } from "react-router-dom"
import styled from "styled-components"
import AuthStatus from "./Auth/AuthStatus/index"
import bgTexture from "../assets/image/bg-texture.png"

export default function Layout() {
  return (
    <Container>
      <AuthStatus />
      <Outlet />
    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;
  max-height: auto;
  background-color: #ad4;
  background-image: url(${bgTexture});
  height: 100%;
  width: 100%;
`
