import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import { Fab, Zoom } from "@material-ui/core"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"

const useScrollTopStyles = makeStyles(theme => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}))

function ScrollTopWrapper(props) {
  const { children, window, backToTopAnchorId } = props
  const classes = useScrollTopStyles()

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      `#${backToTopAnchorId}`
    )
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  })

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  )
}

ScrollTopWrapper.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
  backToTopAnchorId: PropTypes.string.isRequired,
}

function ScrollTop({ ...props }) {
  return (
    <ScrollTopWrapper {...props}>
      <Fab color="primary" size="small" aria-label="scroll back to top">
        <KeyboardArrowUpIcon style={{ color: "white" }} />
      </Fab>
    </ScrollTopWrapper>
  )
}

export default ScrollTop
