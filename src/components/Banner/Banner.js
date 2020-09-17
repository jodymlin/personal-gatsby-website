import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Typography } from "@material-ui/core"

const styles = theme => ({
  title: {
    padding: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(1),
      margin: theme.spacing(1, 0),
    },
  },
  background: {
    position: "relative",
    height: "200px",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
  },
  overlay: {
    width: "100%",
    padding: theme.spacing(1.5, 0),
    backgroundColor: `rgb(255, 255, 255, 0.7)`,
    position: "absolute",
  },
})

function Banner({ classes, children, ...props }) {
  const myImg = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "japanwalk.jpg" }) {
        childImageSharp {
          fluid {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
    }
  `)

  return (
    <div className={classes.background} {...props}>
      <Img
        fluid={myImg.file.childImageSharp.fluid}
        className={classes.backgroundImage}
      />
      <div className={classes.overlay}>
        <Typography
          variant="h3"
          component="h1"
          align="center"
          className={classes.title}
        >
          {props.title}
        </Typography>
        {children}
      </div>
    </div>
  )
}

Banner.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withStyles(styles)(Banner)
