import React from 'react'
import {Typography, Link} from '@material-ui/core'
import resume from '../../media/jodylin_resume.pdf'

function Resume() {
    return (
        <object data={resume} type="application/pdf" width='100%' height='500px'>
            <Typography>
                Your browser isn't supporting embedded pdf files.
                You can download the file
                <Link href="https://drive.google.com/file/d/1s3AMvX_0_SiQcQO86blMyJVuth-7CK0t/view?usp=sharing">
                    here
                </Link>.
            </Typography>
        </object>
    )
}

export default Resume;