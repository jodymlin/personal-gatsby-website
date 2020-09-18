import React from "react"
import PropTypes from "prop-types"
import { Container, Link, Typography, Fab, Zoom } from "@material-ui/core"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"
import { makeStyles } from "@material-ui/core/styles"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import HeaderFooter from "../components/HeaderFooter/HeaderFooter"
import CountryList from "../components/Travel/CountryList"
import Banner from "../components/Banner/Banner"

const useScrollTopStyles = makeStyles(theme => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  }
}))

const handleClick = event => {
  const anchor = (event.target.ownerDocument || document).querySelector(
    "#back-to-top-anchor"
  )
  if (anchor) {
    anchor.scrollIntoView({ behavior: "smooth", block: "center" })
  }
}

function ScrollTop(props) {
  const { children, window } = props
  const classes = useScrollTopStyles()

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

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
}

const useTravelStyles = makeStyles(theme => ({
  caption: {
    padding: theme.spacing(3, 0),
  },
  bottomText: {
    lineHeight: '3'
  }
  
}))

function Travel(props) {
  const classes = useTravelStyles()

  return (
    <HeaderFooter>
      <Container maxWidth="md">
        <Banner title="My Travels!" id="back-to-top-anchor">
          <Typography align="center" className={classes.caption}>
            Some pictures from the amazing places I have traveled to :)
          </Typography>
        </Banner>

        <CountryList />
      </Container>
      <ScrollTop {...props}>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon style={{ color: "white" }} />
        </Fab>
      </ScrollTop>
      <Link onClick={handleClick} >
        <Typography align='center' className={classes.bottomText}>
          Back to Top
        </Typography>
      </Link>
      
    </HeaderFooter>
  )
}

export default Travel
