import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import jodyjapan from '../../media/jody_japan.jpg'

const styles = theme => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column'
        },
        padding: theme.spacing(2, 0)
    },
    pic: {
        width: '35%',
        [theme.breakpoints.down('xs')]: {
            width: '50%'
        },
        borderRadius: theme.spacing(6),
        //padding: theme.spacing(2)
    },
    blurb: {
        textAlign: 'justify',
        padding: theme.spacing(2, 0, 0),
        maxWidth: '55%',
        [theme.breakpoints.down('xs')]: {
            maxWidth: '100%'
        }
    }
});

const blurb = `I am a Computer Science major at UCLA who loves
to learn and fiddle with things in my free time!
Check out my Projects+More! section to check out what I've done!`

function PicBlurb({classes}) {
    return (
    <div className={classes.container}>
        <img className={classes.pic} src={jodyjapan} alt=''/>
        <div className={classes.blurb}>
            <Typography>{blurb}</Typography>
        </div>
        
    </div> 
    );
}

export default withStyles(styles)(PicBlurb);