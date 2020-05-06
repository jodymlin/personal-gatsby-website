import React from "react"
import FactList from '../components/About/FactList'
import Container from '@material-ui/core/Container'

import FrontBanner from '../components/FrontBanner/FrontBanner'
import HeaderFooter from '../components/HeaderFooter/HeaderFooter'
import PicBlurb from "../components/About/PicBlurb"
import Resume from '../components/Resume/Resume'
import ProjectPreview from '../components/Projects/ProjectPreview'
import Title from '../components/Title/Title'


export default () => <div>
    <HeaderFooter>
        <Container maxWidth='md'>
            <FrontBanner id='contact'/>
            <PicBlurb/>

            <Title id='about-me'>About Me</Title>
            <FactList/>

            <Title id='resume'>Resume</Title>
            <Resume/>

            <Title id='projects-and-more'>Projects+More!</Title>
            <ProjectPreview/>
        </Container>
    </HeaderFooter>
</div>
