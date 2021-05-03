import React, { Component } from "react"
import axios from "axios"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Users from "../components/users"
import { Link } from "gatsby"

const API_URL = 'https://www.omdbapi.com/?apikey=' + process.env.GATSBY_API_KEY;

class IndexPage extends Component {
  state = {
    loading: false,
    error: false,
    movies: []
  }

  componentDidMount() {
    this.latestMovie()
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />

        <div className="movie-container">
            {this.state.loading ? (
              <p>Please hold, movie incoming!</p>
            ) : this.state.movies.length > 0 ? (
              <>

                {this.state.movies.map((item, i) =>
                  <div className="movie-item" key={i}>
                    <Link to={`/movie?${item.imdbID}`}>
                      <div className="movie">
                        <img className="movie-poster img-fluid" src={item.Poster} alt=""/>
                        <div className="movie-title">{item.Title}</div>
                        <p className="movie-rating">{item.imdbRating}</p>
                      </div>
                    </Link>
                  </div>
                )}

              </>
            ) : (
              <p>Oh noes, error fetching movie :(</p>
            )}
        </div>
      </Layout>
    )
  }

  // This data is fetched at run time on the client.
  latestMovie = () => {
    // let API_QUERY = API_URL + '&i=tt3896198';
    let API_QUERY = API_URL + '&s=avengers';
    this.setState({ loading: true })
    axios
      .get(API_QUERY)
      .then(movies => {
        // const {
        //   data: {
        //     Poster: poster,
        //     Title: title,
        //     Type: type,
        //     Year: year,
        //   },
        // } = movies

        // console.log(movies)

        this.setState({
          loading: false,
          // movies: {
          //   ...this.state.movies,
          //   title,
          //   imdbRating,
          // },
          movies: movies.data.Search,
        })
      })
      .catch(error => {
        this.setState({ loading: false, error })
      })
  }
}

export default IndexPage
