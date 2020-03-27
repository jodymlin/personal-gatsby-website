import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'

const styles = theme => ({
    title: {
        padding: theme.spacing(5, 0)
    }
});

function Title({classes, children, ...props}) {
    return (
        <Typography variant='h4' align='center' className={classes.title} {...props}>{children}</Typography>
    );
}

Title.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.string
}

export default withStyles(styles)(Title);