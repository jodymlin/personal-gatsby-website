import React from 'react'
import { Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import HeaderFooter from '../components/HeaderFooter/HeaderFooter'
import PhotoList from '../components/PhotoList/PhotoList'
import Banner from '../components/Banner/Banner'

const useTravelStyles = makeStyles( theme => ({
    caption: {
        padding: theme.spacing(3, 0)
    }
}));

function Travel() {
    const classes = useTravelStyles();

    return <HeaderFooter>
        <Container maxWidth='md'>
            <Banner title='My Travels!'>
                <Typography align='center' className={classes.caption}>
                    Here are some pictures from the amazing places I have traveled to :)
                </Typography>
            </Banner>
        
            <PhotoList />
        </Container>
    </HeaderFooter>
}

export default Travel;