import { Link } from "gatsby"
import * as React from "react"
import { HeaderWrapper, LinksWrapper } from "./Styles-Header"

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Link to="/" className="site-title">
      {siteTitle}
    </Link>
    <LinksWrapper>
      <Link to="/toys">All products</Link>
      <Link to="/cart">My Cart</Link>
    </LinksWrapper>
  </HeaderWrapper>
)

export default Header
