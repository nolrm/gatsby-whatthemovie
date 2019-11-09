import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Users from "../components/users"

const RandomUsers = (props) => {
  const users = props.data.allRandomUser.edges;

  return (
  <Layout>
    <SEO title="Home" />

    <div>
      {users.map((user, i) => {
        const userData = user.node;
        return (
          <div key={i}>
            <p>{userData.name.first} {userData.name.first} {userData.name.last}</p>
            <img src={userData.picture.medium} alt=""/>
          </div>
        )
      })}
    </div>

  </Layout>
)}

export default RandomUsers

export const query = graphql`
  query RandomUserQuery {
    allRandomUser {
      edges {
        node {
          gender
          name {
            title
            first
            last
          }
          picture {
            large
            medium
            thumbnail
          }
        }
      }
    }
  }
`;
