import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import Header from "../Header/Header"
import "../layout.css"
import { BodySection, Footer } from "./Styles-Layout"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>
          <BodySection>{children}</BodySection>
        </main>
      </div>
      <Footer>
        <div>
          Built with <a href="https://www.gatsbyjs.com">Gatsby</a> and{" "}
          <a href="https://www.shopify.com">Shopify</a>
        </div>

        <div>
          ©<a href="https://github.com/krononsoft">Krononsoft</a>,{" "}
          {new Date().getFullYear()}
        </div>
      </Footer>
    </>
  )
}

export default Layout
