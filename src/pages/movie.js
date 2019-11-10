import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const MoviePage = (props) => {

  let str = props.location.search.slice(1);

  return (
    <Layout>
      <SEO title="Movie detail" />
      <h1>Movie</h1>

      {str}

    </Layout>
  )
}

export default MoviePage
