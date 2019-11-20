import React from "react"
import FactList from '../components/About/FactList'
import Container from '@material-ui/core/Container'

import Banner from '../components/Banner/Banner'
import HeaderFooter from '../components/HeaderFooter/HeaderFooter'
import PicBlurb from "../components/About/PicBlurb"
import Title from '../components/Title/Title'


export default () => <div>
    <HeaderFooter>
        <Container maxWidth='md'>
            <Banner/>
            <PicBlurb/>
            <Title>About Me</Title>
            <FactList/>
        </Container>
    </HeaderFooter>
</div>
