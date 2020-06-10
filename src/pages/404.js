import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Button, Typography } from '@material-ui/core'

import HeaderFooter from '../components/HeaderFooter/HeaderFooter'
import Title from '../components/Title/Title'

const errorPageStyles = makeStyles(theme => ({
    container: {
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    button: {
        margin: theme.spacing(2, 0)
    },
    link: {
        textDecoration: 'none'
    }
}));

const imgStyles = () => ({
    wrapper: {
        width: '300px',
        maxWidth: '100%',
        margin: '16px auto',
        borderRadius: '50%',
    }
})

function ErrorPage() {

    const imgstyle = imgStyles();
    const classes = errorPageStyles();

    const img = useStaticQuery(graphql`
    query {
        file(relativePath: { eq: "iu/yellowdress.jpg" }) {
            childImageSharp {
                fluid {
                    base64
                    aspectRatio
                    src
                    srcSet
                    sizes
                }
            }
        }
        }
    `)

    return <HeaderFooter>
        <Container maxWidth='md' className={classes.container}>
            <Title>Error 404</Title>
            <Typography align='center'>There's nothing here except a picture of IU.</Typography>
            <Img fluid={img.file.childImageSharp.fluid} style={imgstyle.wrapper}/>
            <Typography align='center'>
                But if that's not what you're looking for then why not head home?
            </Typography>
            <Link to='/' className={classes.link}>
                <Button variant='outlined' className={classes.button}>
                    Go Home
                </Button>
            </Link>
            
        </Container>
    </HeaderFooter>
}

export default ErrorPage;
