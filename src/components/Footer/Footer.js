import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"

const styles = theme => ({
  footer: {
    top: "auto",
    bottom: 0,
    width: "100%",
    margin: theme.spacing(4, 0),
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  link: {
    textDecoration: "inherit",
    color: "inherit",
  },
})

function Footer({ classes }) {
  return (
    <div className={classes.footer}>
      <Typography align="center">
        © Jody Lin {new Date().getFullYear()}
      </Typography>
    </div>
  )
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Footer)
