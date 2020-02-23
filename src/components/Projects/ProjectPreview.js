import React from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

import ProjectCard from './ProjectCard'
import placeholder from '../../media/placeholder.jpg'
import hackWebsite from '../../media/hack_website.png'

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
    },
    {
        title: 'UCLA ACM Hack Website',
        media: hackWebsite,
        description: `UCLA ACM Hack's website built 
        with React.js and Gatsby. 
        Check it out for updates on Hack's events and 
        README's from past workshops!`
    },
    {
        title: 'Sensortile Snake',
        media: hackWebsite,
        description: `Final Project for Engr 96C. A take on the
        classic Snake game that uses the accelerometer
        in a SensorTile IoT module to determine player
        movement. Implemented with C and Python.`
    },
    {
        title: 'MyCar App',
        media: hackWebsite,
        description: `An app created with React Natvie at LAHacks 
        that provides a convenient place containing all information
        about your car. Implemented the Google Maps feature that 
        allows users to track and time where  and when they parked their car. `
    },
    {
        title: 'Bows and Arrows',
        media: hackWebsite,
        description: `Throwback to 11-year-old me living out my dreams 
        of becoming Katniss Everdeen after making my own bows and arrows :)`
    },
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