import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import {
  MuiThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"

import MenuBar from "../MenuBar/MenuBar"
import Footer from "../Footer/Footer"

const customTheme = createMuiTheme({
  typography: {
    fontSize: 14,
    fontFamily: '"PT Serif", sans-serif',
  },
  palette: {
    primary: {
      main: "#ff867d",
    },
  },
})

function HeaderFooter({ children, ...props }) {
  return (
    <MuiThemeProvider theme={responsiveFontSizes(customTheme)}>
      <CssBaseline />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <title>Jody Lin</title>
      </Helmet>
      <MenuBar {...props} />
      {children}
      <Footer />
    </MuiThemeProvider>
  )
}

HeaderFooter.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HeaderFooter
