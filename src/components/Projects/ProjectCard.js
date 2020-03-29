import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

import { IconButton, Typography } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'

const styles = theme => ({
    mediaWrapper: {
        width: '100%',
        maxHeight: '250px',
        overflowY: 'hidden',
        margin: theme.spacing (1, 0)
    },
    description: {
        //margin: theme.spacing (1, 0)
    },
    links: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

const useCardStyles = makeStyles({
    imgMedia: {
        width: '100%',
        height: 'inherit'
    },
    vidMedia: {
        width: '100%',
        maxHeight: 'inherit'
    }
});

function CardMedia({ data }) {
    const { media, mediaType, title } = data;
    const classes = useCardStyles();
    if (mediaType === 'img') {
        return <img src={media} className={classes.imgMedia} alt={title}/>
    }
    else if (mediaType === 'mp4') {
        return <video src={media} className={classes.vidMedia} controls muted></video>
    }
    else if (mediaType === 'youtube') {
        return <iframe src={media} title={title} width='100%' height='250px' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    }
    else {
        return <Typography>Unknown media type</Typography>
    }
}

function ProjectCard({ classes, data }) {
    const { title, description, github } = data;
    return(
        <div>
            <div className={classes.links}>
                <Typography variant='h6'>{title}</Typography>
                <IconButton edge="end" disabled={!github} href={github} color='inherit'>
                    <GitHubIcon/>
                </IconButton>
            </div>
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



