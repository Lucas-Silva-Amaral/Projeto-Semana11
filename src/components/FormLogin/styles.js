import styled from 'styled-components';


export const ContainerForm = styled.div`
  form{
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`


export const ContentForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  /* background-color: red; */
`
export const Label = styled.label`
  font-size: 20px;
  color: #fff;
`

export const Input = styled.input`
  border: none;
  outline: none;
  padding: 10px;
  font-size: 20px;
`

export const BtnLogin = styled.button`
  margin-top: 20px;
  outline: none;
  border: none;
  padding: 10px;
  background-color: #4db5ff;
  color: #fff;
  cursor: pointer;
  transition: all 400ms ease;
  
  &:hover{
    background-color: rgba(77, 181, 255, 0.4);
    color: rgba(255, 255, 255, 0.6)
  }
`