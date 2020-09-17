import React from "react"
import { withStyles } from "@material-ui/core/styles"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Typography from "@material-ui/core/Typography"

const styles = theme => ({
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
    padding: theme.spacing(2, 0),
  },
  pic: {
    width: "35%",
    [theme.breakpoints.down("xs")]: {
      width: "50%",
    },
    borderRadius: theme.spacing(6),
    //padding: theme.spacing(2)
  },
  blurb: {
    textAlign: "justify",
    padding: theme.spacing(2, 0, 0),
    maxWidth: "55%",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
    },
  },
})

const blurb = `I am a Computer Science major at UCLA who loves
to learn and fiddle with things in my free time! I also have
a passion for teaching and spreading the love for CS :)
Check out my Projects+More! section to check out what I've done!`

function PicBlurb({ classes }) {
  const pic = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "jody_japan.jpg" }) {
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
    <div className={classes.container}>
      <Img
        className={classes.pic}
        fluid={pic.file.childImageSharp.fluid}
        alt=""
      />
      <div className={classes.blurb}>
        <Typography>{blurb}</Typography>
      </div>
    </div>
  )
}

export default withStyles(styles)(PicBlurb)
