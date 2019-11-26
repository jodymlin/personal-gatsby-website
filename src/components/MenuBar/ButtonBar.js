import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'gatsby'
import { Button } from '@material-ui/core'

const styles = () => ({
    link: {
        textDecoration: 'inherit',
        color: 'inherit',
        width: '100%'
    }
});

class ButtonBar extends React.Component{
    render() {
        const { classes, isMobile } = this.props;

        const MenuButton = ({to, ...props}) => 
        <Link to={to} className={classes.link}>
            <Button fullWidth={isMobile} {...props}/>
        </Link>
    
        return (
            <>
            {/* TODO: add link to new pages */}
            <MenuButton>About</MenuButton>
            <MenuButton>Resume</MenuButton>
            <MenuButton>Projects+More!</MenuButton>
            </>
        );
    }

}

ButtonBar.propTypes = {
    classes: PropTypes.object.isRequired,
    isMobile: PropTypes.bool.isRequired
}


export default withStyles(styles)(ButtonBar);