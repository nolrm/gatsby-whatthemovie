import React, { Component } from "react"
import axios from "axios"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Users from "../components/users"

const API_KEY = process.env.OMDB_API_KEY;

class IndexPage extends Component {
  state = {
    loading: false,
    error: false,
    movies: {
      title: '',
      imdbRating: ''
    }
  }

  componentDidMount() {
    this.latestMovie()
  }

  render() {
    const { title, imdbRating } = this.state.movies

    return (
      <Layout>
        <SEO title="Home" />

        <div style={{ textAlign: "center", width: "600px", margin: "50px auto" }}>
          <div>
            {this.state.loading ? (
              <p>Please hold, movie incoming!</p>
            ) : title && imdbRating ? (
              <>
                <h2>{`${title}`}</h2>
                <p>{imdbRating}</p>
              </>
            ) : (
              <p>Oh noes, error fetching movie :(</p>
            )}
          </div>
        </div>
      </Layout>
    )
  }

  // This data is fetched at run time on the client.
  latestMovie = () => {
    let API_URL = 'https://www.omdbapi.com/?apikey=' + API_KEY + '&i=tt3896198';

    this.setState({ loading: true })

    axios
      .get(API_URL)
      .then(movies => {
        const {
          data: {
            Title: title,
            imdbRating
          },
        } = movies
        // console.log(movies)
        this.setState({
          loading: false,
          movies: {
            ...this.state.movies,
            title,
            imdbRating,
          },
        })
      })
      .catch(error => {
        this.setState({ loading: false, error })
      })
  }
}

export default IndexPage
