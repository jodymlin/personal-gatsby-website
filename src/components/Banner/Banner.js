import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Typography, Grid, Link } from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid'
import MailOutlineIcon from '@material-ui/icons/MailOutline'

import japanwalk from '../../media/japanwalk.jpg'

const styles = theme => ({
    title: {
        padding: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(1),
            margin: theme.spacing(1, 0)
        }
    },
    background: {
        position: 'relative',
        height: '200px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
    },
    backgroundImage: {
        position: 'absolute',
        width: '100%'
    },
    overlay: {
        width: '100%',
        padding: theme.spacing(1.5, 0),
        backgroundColor: `rgb(255, 255, 255, 0.7)`,
        position: 'absolute'
    },
    contactItems: {
        padding: theme.spacing(1.5, 0)
    }, 
    item: {
        display: 'flex',
        justifyContent: 'center',
        padding: theme.spacing(0.5, 0)
    }
});



function Banner({classes, ...props}) {
    const myImg = useStaticQuery(graphql`
        query {
        file(relativePath: { eq: "japanwalk.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        }
    `);
    const ContactItem = ({children}) => <Grid item sm={3} xs={12} className={classes.item}>
            {children}
        </Grid>
    return( <>
        <div className={classes.background}>
            <Img fluid={myImg.file.childImageSharp.fluid} className={classes.backgroundImage}/>
            <div className={classes.overlay}>
            <Typography variant='h3' component='h1' align='center' className={classes.title}>
                Jody Lin
            </Typography>
            <Grid container className={classes.contactItems}>
                <ContactItem>
                    <MailOutlineIcon />
                    <Typography align='center'> jody.m.lin@gmail.com </Typography>
                </ContactItem>
                <ContactItem>
                    <PhoneAndroidIcon />
                    <Typography align='center'> (949) 377-5165 </Typography>
                </ContactItem>
                <ContactItem>
                    <Link href='https://github.com/jodymlin' rel="noopener noreferrer" target="_blank"
                    color='textPrimary' className={classes.item}>
                        <GitHubIcon />
                        <Typography align='center'>github</Typography>
                    </Link>
                </ContactItem>
                <ContactItem>
                    <Link href='https://www.linkedin.com/in/jody-lin-a5b390172/' 
                        rel="noopener noreferrer" target="_blank"
                        color='textPrimary' className={classes.item}>
                        <LinkedInIcon />
                        <Typography align='center'>linkedin</Typography>
                    </Link>
                </ContactItem>
            </Grid>
        </div>
        </div>
        </>
    );
}


export default withStyles(styles)(Banner);