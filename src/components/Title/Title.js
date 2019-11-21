import React from 'react'
import {withStyles} from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'

const styles = theme => ({
    title: {
        margin: 'auto',
        padding: theme.spacing(3),
        width: 'fit-content'
    }
});

function Title({classes, children}) {
    return (
        <div className={classes.title}>
            <Typography variant='h4'>{children}</Typography>
        </div>
    );
}

export default withStyles(styles)(Title);