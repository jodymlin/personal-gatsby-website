import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

import { Typography } from '@material-ui/core'

const styles = theme => ({
    mediaWrapper: {
        width: '100%',
        maxHeight: '250px',
        overflowY: 'hidden',
        margin: theme.spacing (1, 0)
    },
    description: {
    }
});

const useCardStyles = makeStyles({
    media: {
        width: '100%'
    }
});

function CardMedia({ data }) {
    const { media, mediaType } = data;
    const classes = useCardStyles();
    if (mediaType === 'img') {
        return <img src={media} className={classes.media}/>
    }
    else if (mediaType === 'mp4') {
        return <video src={media} height='100%' controls muted></video>
    }
    else if (mediaType === 'youtube') {
        return <iframe src={media} height='100%' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    }
    else {
        return <Typography>Unknown media type</Typography>
    }
}

function ProjectCard({ classes, data }) {
    const { title, description} = data;
    return(
        <div>
            <Typography variant='h6'>{title}</Typography>
            <div className={classes.mediaWrapper}>
                <CardMedia data={data}/>
            </div>
            <div className={classes.description}>
                <Typography>{ description }</Typography>
            </div>
        </div>
        
    )
}


ProjectCard.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired
}

export default withStyles(styles)(ProjectCard);



