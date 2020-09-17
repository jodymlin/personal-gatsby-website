import React from "react"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import ProjectCard from "./ProjectCard"
//import placeholder from '../../media/placeholder.jpg'
import hackWebsite from "../../media/hack_website.png"
import snakeDemo from "../../media/snake_demo.mp4"
import myCarDemo from "../../media/mycar_demo.mp4"

const projects = [
  /*
        title : 'Project Title',
        github: 'https://github.com/jodymlin',
        media: placeholder,
        mediaType: 'img',
        description: `the quick brown fox jumped over the lazy dog 
                        the quick brown fox jumped over the lazy dog. 
                        the quick brown fox jumped over the lazy dog. 
                        the quick brown fox jumped over the lazy dog.
                        the quick brown fox jumped over the lazy dog.`
    */
  {
    title: "UCLA ACM Hack Website",
    github: "https://github.com/uclaacm/hack.uclaacm.com",
    media: hackWebsite,
    mediaType: "img",
    description: `UCLA ACM Hack's website built 
        with React.js and Gatsby. 
        Check it out for updates on Hack's events and 
        README's from past workshops!`,
  },
  {
    title: "Sensortile Snake",
    github: "https://github.com/jodymlin/sensortile_snake",
    media: snakeDemo,
    mediaType: "mp4",
    description: `Final Project for Engr 96C. A take on the
        classic Snake game that uses the accelerometer
        in a SensorTile IoT module to determine player
        movement. Implemented with C and Python.`,
  },
  {
    title: "MyCar App",
    github: "https://github.com/jodymlin/car_app",
    media: myCarDemo,
    mediaType: "mp4",
    description: `An app created with React Native at LAHacks 
        that provides a convenient place containing all information
        about your car. Implemented the Google Maps feature that 
        allows users to track and time where  and when they parked their car. `,
  },
  {
    title: "Bows and Arrows",
    github: null,
    media: "https://www.youtube.com/embed/yYe7Sl0CTTw",
    mediaType: "youtube",
    description: `Throwback to 11-year-old me living out my dreams 
        of becoming Katniss Everdeen after making my own bows and arrows :)`,
  },
]

const useGridStyle = makeStyles(theme => ({
  container: {
    //margin: theme.spacing(0, 0, 3, 0)
  },
}))

function ProjectPreview() {
  const classes = useGridStyle()

  return (
    <Grid container spacing={4} className={classes.container}>
      {projects.map(o => (
        <Grid item xs={12} sm={6} md={6} id={o.title} key={o.title}>
          <ProjectCard data={o} />
        </Grid>
      ))}
    </Grid>
  )
}

export default ProjectPreview
