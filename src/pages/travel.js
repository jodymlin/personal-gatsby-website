import React from 'react'
import PropTypes from 'prop-types'
import { Container, Typography, Fab, Zoom } from '@material-ui/core'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { makeStyles } from '@material-ui/core/styles'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import HeaderFooter from '../components/HeaderFooter/HeaderFooter'
import PhotoList from '../components/PhotoList/PhotoList'
import Banner from '../components/Banner/Banner'


const useScrollTopStyles = makeStyles(theme => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2)
    }
}));

function ScrollTop(props) {
    const { children, window } = props;
    const classes = useScrollTopStyles();

    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true, 
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
        console.log("clicked");
        console.log(anchor);
        // TODO: this anchor is undefined right now
        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center'});
        }
    };

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role='presentation' className={classes.root}>
                {children}
            </div>
        </Zoom>
    )
}

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
}


const useTravelStyles = makeStyles( theme => ({
    caption: {
        padding: theme.spacing(3, 0)
    }
}));

function Travel(props) {
    const classes = useTravelStyles();

    return <HeaderFooter>
        <Container maxWidth='md'>
            <Banner title='My Travels!' id='back-to-top-anchor'>
                <Typography align='center' className={classes.caption}>
                    Some pictures from the amazing places I have traveled to :)
                </Typography>
            </Banner>
        
            <PhotoList />
        </Container>
        <ScrollTop {...props}>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon style={{color: 'white'}}/>
        </Fab>
      </ScrollTop>
    </HeaderFooter>
}

export default Travel;