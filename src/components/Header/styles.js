import styled from "styled-components"

import bgTexture from "../../assets/image/bg-texture.png"
import bgLogin from "../../assets/image/bg-login.jpg"

export const Container = styled.header`
  display: flex;
  background-image: url(${bgTexture});
  background-color: #1f1f38;
  justify-content: space-between;
  align-items: center;
`

export const BackGroundLogin = styled.img.attrs({
  src: bgLogin,
  alt: "bg-login",
})`
  background-color: red;
  width: 50%;
  height: 100vh;
  object-fit: cover;
`

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(150px);
  width: 40%;
  height: 400px;
  margin-right: 10%;
  margin-left: 10%;
  border-radius: 4px;
  padding: 20px;
`

export const Title = styled.h1`
  font-size: 50px;
  color: #fff;
`
