import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import { Link } from "gatsby"
import { Button } from "@material-ui/core"

const styles = () => ({
  link: {
    textDecoration: "none",
    color: "inherit",
    width: "100%",
  },
})

// function MenuButton({classes, props }) {
//     const { isMobile } = props;
//     return <Link to={to} className={classes.link}>
//             <Button fullWidth={isMobile} {...props}/>
//         </Link>
// }

class ButtonBar extends React.Component {
  render() {
    const { classes, isMobile } = this.props

    const MenuButton = function({ to, isSection, ...props }) {
      if (isSection) {
        return (
          <a href={to} className={classes.link}>
            <Button fullWidth={isMobile} {...props} />
          </a>
        )
      } else {
        return (
          <Link to={to} className={classes.link}>
            <Button fullWidth={isMobile} {...props} />
          </Link>
        )
      }
    }
    return (
      <>
        {/* TODO: add link to new pages */}
        <MenuButton isSection to={"/#about-me"}>
          About
        </MenuButton>
        <MenuButton isSection to={"/#resume"}>
          Resume
        </MenuButton>
        <MenuButton isSection to={"/#projects-and-more"}>
          Projects+More!
        </MenuButton>
        <MenuButton to={"/travel"}>Travel</MenuButton>
        <MenuButton to={"/writing"}>Writing</MenuButton>
      </>
    )
  }
}

ButtonBar.propTypes = {
  classes: PropTypes.object.isRequired,
  isMobile: PropTypes.bool,
}

export default withStyles(styles)(ButtonBar)
