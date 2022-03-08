import styled from "styled-components"
import { Link } from "react-router-dom"

export const Header = styled.header``

export const BtnLogar = styled(Link).attrs({
  to: "/login",
})`
  text-decoration: none;
  padding: 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 400ms ease;
  font-size: 20px;
  background-color: #fff;
`
