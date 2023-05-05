import styled from "styled-components"
import img from "../../images/main-image.jpeg"
export const Footer = styled.footer`
  background-color: #292c2f;
  bottom: 0;
  color: #bbb;
  font-family: BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 18px;
  height: 100px;
  position: absolute;
  text-align: center;
  width: 100%;

  a {
    color: #999;
    text-decoration: none;
  }

  a:hover,
  footer a:focus {
    color: #aaa;
    text-decoration: none;
    border-bottom: 1px dotted #999;
  }
`

export const BodySection = styled.div`
  text-align: center;
  vertical-align: center;
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`
