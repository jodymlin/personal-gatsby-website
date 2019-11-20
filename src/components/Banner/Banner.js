import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import taiwan from '../../media/taiwan.jpg'

const styles = () => ({
    background: {
        display: 'flex',
        alignItems: 'center',
        height: '200px',
        backgroundImage: `url(${taiwan})`,
        backgroundPosition: 'center'
    },
    overlay: {
        //height: '200px'
    }
});

function Banner({classes}) {
    return(
        <section className={classes.background}>
            <div className={classes.overlay}>This is a banner</div>
        </section>
    );
}


export default withStyles(styles)(Banner);