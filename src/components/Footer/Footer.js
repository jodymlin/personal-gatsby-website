import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import { AppBar, Button, Link, Toolbar, Typography } from '@material-ui/core'

const styles = () => ({
    footer: {
        top: 'auto',
        bottom: 0
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    footerItem: {
        width: 'fit-content'
    },
    link: {
        textDecoration: 'inherit',
        color: 'inherit',
    }
});

function Footer({classes}) {
    
    const MenuButton = ({to, ...props}) => 
    <Link underline='none' to={to} className={classes.link}>
        <Button {...props}/>
    </Link>

    return (
        <AppBar color='inherit' position='relative' elevation='0' className={classes.footer}>
            <Toolbar className={classes.toolbar}>
                <div className={classes.footerItem}>
                    <Typography>© Jody Lin</Typography>
                </div>
                <MenuButton>Contact</MenuButton>
            </Toolbar>
        </AppBar>
    )
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Footer);