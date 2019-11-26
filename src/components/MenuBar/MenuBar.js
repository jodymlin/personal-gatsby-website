import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

import { AppBar, Button, Collapse, Toolbar, Typography } from '@material-ui/core'
import ButtonBar from './ButtonBar'

const styles = theme => ({
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    desktopMenu: {
        display: 'block',
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },
    mobileBtn:{
        display: 'none',
        [theme.breakpoints.down('xs')]: {
            display: 'block'
        }
    },
    mobileMenu: {
        display: 'none',
        [theme.breakpoints.down('xs')]: {
            display: 'block',
			boxShadow: theme.shadows[4],
			position: 'fixed',
			zIndex: '1',
			overflow: 'hidden',
			backgroundColor: theme.palette.grey[100],
			width: '100%'
        }
    }
});

function MenuBar({ classes }) {
    const [ menuOpen, setMenuOpen ] = useState(false);
    const toggleMenu = () => setMenuOpen(o => !o);

    return (
        <>
        <AppBar position='sticky' color='inherit'>
            <Toolbar className={classes.toolbar}>
                <Typography variant='h6'>Jody Lin</Typography>
                <div className={classes.desktopMenu}>
                    {/* <Button>About</Button>
                    <Button>Resume</Button>
                    <Button>Projects+More!</Button> */}
                    <ButtonBar />
                </div>
                <div className={classes.mobileBtn}>
                    <Button onClick={toggleMenu}>Temp</Button>
                </div>
            </Toolbar>
        </AppBar>
        <div className={classes.mobileMenu}>
            <Collapse in={menuOpen}>
                <ButtonBar isMobile/>
            </Collapse>
        </div>
        </>
    );
}

MenuBar.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(MenuBar);