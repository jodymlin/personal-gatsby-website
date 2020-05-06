import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Grid, Link } from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid'
import MailOutlineIcon from '@material-ui/icons/MailOutline'

import Banner from '../Banner/Banner'


const styles = theme => ({

    contactItems: {
        padding: theme.spacing(1.5, 0),
        [theme.breakpoints.down('xs')]: {
            padding: 0
        }
    }, 
    item: {
        display: 'flex',
        justifyContent: 'center',
        padding: theme.spacing(0.5, 0)
    }
});



function FrontBanner({classes, ...props}) {

    const ContactItem = ({children}) => <Grid item sm={3} xs={12} className={classes.item}>
            {children}
        </Grid>
    return( <>
        <Banner title='Jody Lin'>
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
        </Banner>
        </>
    );
}


export default withStyles(styles)(FrontBanner);