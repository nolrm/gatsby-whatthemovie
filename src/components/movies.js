
import React from "react"
// import Axios from "axios"

const Movies = () => {
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

  // let pilots = data.swapi.Starship.pilots;

  // render() {
  //
  // }

  return (
    <div>
      hello world
    </div>
  )


  // This data is fetched at run time on the client.
   // fetchRicksPupper = () => {
   //   this.setState({ loading: true })
   //   axios
   //     .get(`https://dog.ceo/api/breeds/image/random`)
   //     .then(pupper => {
   //       const {
   //         data: { message: img },
   //       } = pupper
   //       const breed = img.split("/")[4]
   //       this.setState({
   //         loading: false,
   //         pupper: {
   //           ...this.state.pupper,
   //           img,
   //           breed,
   //         },
   //       })
   //     })
   //     .catch(error => {
   //       this.setState({ loading: false, error })
   //     })
   // }
}
export default Movies
