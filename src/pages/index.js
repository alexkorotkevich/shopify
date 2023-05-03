import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

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
