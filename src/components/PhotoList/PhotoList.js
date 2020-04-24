import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { makeStyles } from '@material-ui/styles'
import { Grid, Typography }from '@material-ui/core'

import dongo from '../../media/japan/dongo.jpg'
import okonomiyaki from '../../media/japan/okonomiyaki.jpg'


const usePhotoListStyles = makeStyles(theme => ({
    picWrapper: {
        display: 'flex',
        justifyContent: 'center',
        maxHeight: '500px',
        overflowY: 'hidden'
    },
    pic: {
        //margin: theme.spacing(2),
        margin: 'auto',
        maxWidth: '100%'
    }
}));

const pics = [
    dongo,
    okonomiyaki
];


function PhotoList() {
    /* TODO: this is all broken */
    const data = useStaticQuery(graphql`
    query {
        allFile(filter: {extension: {
            regex: "/(jpg)|(png)|(jpeg)/"}, 
            relativeDirectory: {eq: "japan"}}) {
            edges {
              node {
                childImageSharp {
                  fluid {
                    base64
                    aspectRatio
                    src
                    srcSet
                    sizes
                  }
                }
                base
              }
            }
          }
    }
    `)
    
    
    const classes = usePhotoListStyles();
    return <>
        <Typography variant='h5' align='center'>Country Here</Typography>
        <Typography align='center'>Winter 2020</Typography>

        <Grid container spacing={4} alignItems='center'>
            { /*
        <Grid item xs={12} sm={6} >
                <div className={classes.picWrapper}>
                    <Img src={dongo} 
                    justify='center' className={classes.pic} />
                </div>
            </Grid>
            */}
            
            {data.allFile.edges.map(image => 
            <Grid item xs={12} sm={6} >
                <div className={classes.picWrapper}>
                    <Img fluid={image.node.childImageSharp.fluid} 
                    alt={image.node.base.split(".")[0]}
                    justify='center' className={classes.pic} />
                </div>
            </Grid>
            )}
            
        </Grid>
    </>
}

export default PhotoList;