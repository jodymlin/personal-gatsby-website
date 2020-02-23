import React from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

import ProjectCard from './ProjectCard'
import placeholder from '../../media/placeholder.jpg'

const projects = [
    {
        title : 'Project Title',
        media: placeholder,
        description: `the quick brown fox jumped over the lazy dog 
                        the quick brown fox jumped over the lazy dog. 
                        the quick brown fox jumped over the lazy dog. 
                        the quick brown fox jumped over the lazy dog.
                        the quick brown fox jumped over the lazy dog.`
    },
    {
        title : 'Another Project',
        media: placeholder,
        description: `the quick brown fox jumped over the lazy dog 
                        the quick brown fox jumped over the lazy dog. 
                        the quick brown fox jumped over the lazy dog. 
                        the quick brown fox jumped over the lazy dog.
                        the quick brown fox jumped over the lazy dog.`
    }
];

function ProjectPreview({ classes }) {

    return <Grid container spacing={5}>
            {projects.map( o => 
                <Grid item xs={12} sm={6} md={6} id={o.title}>
                    <ProjectCard data={o} />
                </Grid>
            )}
        </Grid>
        
}

ProjectPreview.propTypes = {
    classes: PropTypes.object.isRequired
}

export default ProjectPreview;