import styled from "styled-components"
import { Link } from "react-router-dom"
export const Container = styled.header`
  background: #2c2c6c;
  height: 100px;
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: flex-end;
  padding: 0 80px;
`

export const Title = styled.h1`
  color: #fff;
`

export const BtnLogout = styled.button`
  outline: none;
  border: none;
  padding: 15px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 400ms ease;
  font-size: 20px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
  }
`

export const BtnLogar = styled(Link).attrs({
  to: "/login",
})`
  background-color: #fff;
  padding: 15px;
  margin-top: 50px;
  text-decoration: none;
  border-radius: 4px;
  cursor: pointer;
`

export const Main = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

export const H1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
`

export const P = styled.p`
  font-size: 1.5rem;
  color: #fff;
`
