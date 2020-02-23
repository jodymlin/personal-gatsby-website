import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Grid, Link } from '@material-ui/core'

import taiwan from '../../media/taiwan.jpg'

const styles = theme => ({
    title: {
        padding: theme.spacing(2)
    },
    background: {
        display: 'flex',
        alignItems: 'center',
        height: '200px',
        backgroundImage: `url(${taiwan})`,
        backgroundPosition: 'center',
        overflow: 'hidden'
    },
    overlay: {
        width: '100%',
        padding: theme.spacing(1.5, 0),
        backgroundColor: `rgb(255, 255, 255, 0.7)`
    },
    contactItems: {
        padding: theme.spacing(1.5, 0)
    }
});

function Banner({classes}) {
    const ContactItem = ({children}) => <Grid item sm={3} xs={12}>
            <Typography align='center'>{children}</Typography>
        </Grid>
    return(
        <section className={classes.background}>
            <div className={classes.overlay}>
                <Typography variant='h3' component='h1' align='center' className={classes.title}>
                    Jody Lin
                </Typography>
                <Grid container className={classes.contactItems}>
                    <ContactItem>
                        <span role='img'>📧</span>
                        jody.m.lin@gmail.com
                    </ContactItem>
                    <ContactItem>
                        <span role='img'>📞</span>
                        (949)-377-5165
                    </ContactItem>
                    <ContactItem>
                        <Link href='https://github.com/jodymlin' rel="noopener noreferrer" target="_blank"
                        color='textPrimary'>
                            <span role='img'>💻</span>
                            github
                        </Link>
                    </ContactItem>
                    <ContactItem>
                        <Link href='https://www.linkedin.com/in/jody-lin-a5b390172/' 
                            rel="noopener noreferrer" target="_blank"
                            color='textPrimary'>
                            <span role='img'>🌐</span>
                            linkedin
                        </Link>
                    </ContactItem>
                </Grid>
            </div>
        </section>
    );
}


export default withStyles(styles)(Banner);