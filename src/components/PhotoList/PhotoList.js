import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { makeStyles } from '@material-ui/styles'
import { Grid, Typography }from '@material-ui/core'
import Title from '../Title/Title'

const usePhotoListStyles = makeStyles(theme => ({
    picWrapper: {
        display: 'flex',
        justifyContent: 'center',
        maxHeight: '300px',
        overflowY: 'hidden'
    },
    pic: {
        margin: 'auto',
        maxWidth: '100%',
    },
    header: {
        padding: theme.spacing(2)
    },
    date: {
        padding: theme.spacing(1)
    },
    blurb: {
        margin: theme.spacing(0, 0, 4, 0)
    }
}));

const japanBlurb = {
    country: 'Japan',
    date: 'December 2019',
    blurb: `Some fun memories from my week-long 
    trip to Tokyo! Trip highlights include Mount Fuji, 
    lots of good food, and quality time spent with 
    three of my favorite people.`
};

/* TODO: find way to do multiple sections & add Taiwan images*/
function PhotoList() {
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
        <Title>
            {japanBlurb.country}
        </Title>
        <div className={classes.blurb}> 
        <Typography variant='h6' align='center'>
            {japanBlurb.date}
        </Typography>
        <Typography align='center'>
            {japanBlurb.blurb}
        </Typography> 
        </div>

        <Grid container spacing={3} alignItems='center'>
            {data.allFile.edges.map(image => 
            <Grid item xs={12} sm={6} >
                <div className={classes.picWrapper}>
                    <Img fluid={image.node.childImageSharp.fluid} 
                    alt={image.node.base.split(".")[0]}
                    style={{width: "100%"}}
                    justify='center' className={classes.pic} />
                </div>
            </Grid>
            )}
            
        </Grid>
    </>
}

export default PhotoList;