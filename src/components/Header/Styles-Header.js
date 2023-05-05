import styled from "styled-components"

export const HeaderWrapper = styled.header`
  padding: 40px;
  display: flex;
  justify-content: space-between;
  background-color: #808000;
  .site-title {
    font-weight: bold;
    color: #014c40;
  }
  a {
    text-decoration: none;
    color: black;
    font-size: 15px;
    font-weight: normal;
    text-transform: uppercase;
    font-family: BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
      Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    :hover {
      text-decoration: underline;
    }
  }
`
export const LinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 40px;
`
