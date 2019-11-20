import React from "react"
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'

const styles = () => ({
    title: {
        fontWeight: 'bold'
    }
});

function FunFact({classes, title, description}) {
    return (
        <div>
            <Typography className={classes.title}>{title}</Typography>
            <Typography>{description}</Typography>
        </div>
    );
}

FunFact.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default withStyles(styles)(FunFact);