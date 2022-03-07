import styled from "styled-components"

export const H1 = styled.h1`
  color: #000;
  font-size: 3rem;
  text-align: center;
  margin-top: 1rem;
`
export const Container = styled.div`
  max-width: 1660;
  margin: 0 5rem;
  padding: 2rem 2rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  /* background-color: red; */
  gap: 1rem;
`
export const ListPets = styled.ul`
  list-style: none;
  margin: 0;
  padding: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  border-radius: 30px;
  box-shadow: 5px 7px 15px rgba(0, 0, 0, 1);
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(15px);

  li {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: bold;
  }
`
export const AboutPet = styled.div`
  background-color: #fff;
  line-height: 2;
  padding: 2rem;
`

export const Button = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: red;
  color: #fff;
  position: absolute;
  top: -5px;
  right: -5px;
  border-radius: 50%;
  cursor: pointer;
  border: none;
`
export const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`
