import React from "react"
import FactList from '../components/About/FactList'
import Container from '@material-ui/core/Container'

import HeaderFooter from '../components/HeaderFooter/HeaderFooter'
import PicBlurb from "../components/About/PicBlurb"


export default () => <div>
    <HeaderFooter>
        <Container maxWidth='md'>
            <PicBlurb/>
            <FactList/>
        </Container>
    </HeaderFooter>
</div>
