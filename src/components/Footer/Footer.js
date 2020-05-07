import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'gatsby'

import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'

const styles = theme => ({
    footer: {
        top: 'auto',
        bottom: 0,
        margin: theme.spacing(4, 0, 0, 0)
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
    <Link to={to} className={classes.link}>
        <Button {...props}/>
    </Link>

    return (
        <AppBar color='inherit' position='relative' elevation='0' className={classes.footer}>
            <Toolbar className={classes.toolbar}>
                <div className={classes.footerItem}>
                    <Typography>© Jody Lin</Typography>
                </div>
                <MenuButton to={'/'}>Contact</MenuButton>
            </Toolbar>
        </AppBar>
    )
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Footer);