import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
          Currently, he's a senior at California High School, San Ramon.
          </h2>
          <p>He's fascinated by mathematics, computer science, robotics and the connections between the three. Yet to receive a high school diploma, he turns to the local community college to take mathematics courses to quench his thirst for knowledge.</p>
          <p>He fell in love with programming way back in 3rd grade, when he checked out a book on building games in Python. He has spent the last 9-10 years honing his skills in programming and computer science.</p>
          <p>Now, he finds that most of his programming is freelance web development or in C++ for the 1516B robot.</p>
          <p>When he's not at a computer, he enjoys writing poetry, learning foreign languages, shooting on film, and playing bansuri. At a party, you'll be able to find him talking to anyone who'll listen.</p>
{/*          <figure className="kg-card kg-image-card">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Large imagery is at the heart of this theme</figcaption>
  </figure>*/}
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "profile.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
