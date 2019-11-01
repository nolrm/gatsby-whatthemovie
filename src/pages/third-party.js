import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Articles from "../components/articles"

const ThirdPage = () => {
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Third party APIs</h1>

      <Articles/>

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default ThirdPage
