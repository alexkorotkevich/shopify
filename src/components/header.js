import * as React from "react"
import styled from "styled-components"

import { Link } from "gatsby"
console.log("1")
const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Link to="/" className="site-title">{siteTitle}</Link>
    <LinksWrapper>
      <Link to="/toys">All products</Link>
      <Link to="/cart">My Cart</Link>
    </LinksWrapper>
  </HeaderWrapper>
)

export default Header

const HeaderWrapper = styled.header`
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
    font-family: BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
    :hover {
      text-decoration: underline;
    }
  }
`
const LinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 40px;
`