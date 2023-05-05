import * as React from "react"

import Layout from "../components/Layout/Layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div>
      <h1>
        Welcome to <b>Toys4eveR</b> portal
      </h1>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
