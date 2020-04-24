import React from 'react'
import { Container, Typography } from '@material-ui/core'
import HeaderFooter from '../components/HeaderFooter/HeaderFooter'
import Title from '../components/Title/Title'

import PhotoList from '../components/PhotoList/PhotoList'


export default () => <HeaderFooter>
    <Container maxWidth='md'>
        <Title>My Travels!</Title>
        <Typography align='center'>
            Here are some pictures from the amazing places I have traveled to :)
        </Typography>

        <PhotoList />
    </Container>
</HeaderFooter>