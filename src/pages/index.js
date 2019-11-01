import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {

  return (
  <Layout>
    <SEO title="Home" />

    <h1>Hey!</h1>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <div>
      <Link to="/page-2/">Go to page 2</Link>
    </div>

    <div>
      <Link to="/third-party/">Third party</Link>
    </div>

  </Layout>
)}

export default IndexPage
