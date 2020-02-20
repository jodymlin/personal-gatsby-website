import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import placeholder from '../../media/placeholder.jpg'

const styles = () => ({
    mediaWrapper: {
        width: '100%',
        height: '250px',
        overflowY: 'hidden'
    },
    media: {
        width: '100%'
    }
});

function ProjectCard({ classes }) {
    return(
        <div>
            <Typography variant='h6'>Project Title</Typography>
            <div className={classes.mediaWrapper}>
                <img src={placeholder} className={classes.media}/>
            </div>
            <div>
                Project Description: slkdjfa
                the quick brown fox jumps over the lazy dog. 
                the quick brown fox jumps over the lazy dog. 
                the quick brown fox jumps over the lazy dog. 
                the quick brown fox jumps over the lazy dog. 
                the quick brown fox jumps over the lazy dog. 
            </div>
        </div>
        
    )
}

export default withStyles(styles)(ProjectCard);



