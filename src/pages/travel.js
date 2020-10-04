import React from "react"
import { Container, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import HeaderFooter from "../components/HeaderFooter/HeaderFooter"
import CountryList from "../components/Travel/CountryList"
import Banner from "../components/Banner/Banner"
import ScrollTop from "../components/ScrollTop/ScrollTop"

const useTravelStyles = makeStyles(theme => ({
  caption: {
    padding: theme.spacing(3, 0),
  },
  bottomText: {
    lineHeight: "3",
  },
}))

function Travel() {
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
      <ScrollTop backToTopAnchorId={"back-to-top-anchor"} />
    </HeaderFooter>
  )
}

export default Travel
