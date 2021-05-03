
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Users = () => {
  // const data = useStaticQuery(graphql`
  //   {
  //     swapi {
  //       Starship(name: "Millennium Falcon") {
  //         name
  //         hyperdriveRating
  //         pilots(orderBy: height_DESC) {
  //           name
  //           height
  //           homeworld {
  //             name
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
  //
  // let pilots = data.swapi.Starship.pilots;
  //
  // return (
  //   <div>
  //     {pilots.map((user, i) => {
  //       return (
  //         <div key={i}>
  //           <p>
  //             Name: {user.name} <br/>
  //             height: {user.height} <br/>
  //             Homeworld: {user.homeworld.name}
  //           </p>
  //         </div>
  //       )
  //     })}
  //   </div>
  // )
}

export default Users
