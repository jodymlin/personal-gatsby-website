import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import taiwan from '../../media/taiwan.jpg'

const styles = () => ({
    background: {
        backgroundImage: `url(${taiwan})`
    }
});

function Banner({classes}) {
    return(
        <section className={classes.background}>
        </section>
    );
}


export default withStyles(styles)(Banner);