import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PhotoList from "./PhotoList"

/* TODO: find way to do multiple sections & add Taiwan images*/
function CountryList() {
  const data = useStaticQuery(graphql`
    query Photos {
      allTravelDetail {
        nodes {
          blurb
          country
          date
          folder
          id
        }
      }
      japan: allFile(filter: { relativeDirectory: { eq: "japan" } }) {
        ...photoFields
      }
      taiwan: allFile(filter: { relativeDirectory: { eq: "taiwan" } }) {
        ...photoFields
      }
    }
    fragment photoFields on FileConnection {
      edges {
        node {
          childImageSharp {
            fluid {
              base64
              aspectRatio
              src
              srcSet
              sizes
            }
          }
          base
        }
      }
    }
  `)

  return (
    <>
      {data.allTravelDetail.nodes.map(trip => (
        <PhotoList
          key={trip.id}
          country={trip.country}
          date={trip.date}
          blurb={trip.blurb}
          pictures={data[trip.folder].edges}
        />
      ))}
    </>
  )
}

export default CountryList
