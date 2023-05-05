import styled from "styled-components"

export const BackButton = styled.p`
  cursor: pointer;
  color: #014c40;
  margin-left: 40px;
  font-size: 14px;
  font-weight: 600;
`

export const Wrapper = styled.div`
  margin: 40px;
  display: grid;
  grid-template-columns: 400px auto;
  gap: 40px;
`

export const Image = styled.img`
  width: 400px;
  height: 500px;
  border-radius: 30px;
  object-fit: cover;
`

export const InfoContainer = styled.div`
  display: grid;
  align-items: flex-start;
  height: fit-content;
  gap: 10px;
  p {
    margin: 0;
  }
`

export const Title = styled.h1`
  margin: 0;
`

export const Subtitle = styled.p`
  font-weight: bold;
  max-width: 500px;
`

export const InputForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, auto);
  width: fit-content;
  gap: 20px;
  align-items: center;
  gap: 10px;
`

export const Input = styled.input`
  border-radius: 20px;
  border: 2px solid rgba(0, 0, 0, 0.3);
  padding: 10px 20px;
  max-width: 80px;
  font-size: 12px;
  :focus {
    outline: none;
    outline-color: #014c40;
  }
`
