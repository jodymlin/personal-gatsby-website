import React from "react"
import { Typography, Link } from "@material-ui/core"
import resume from "../../media/jodylin_resume.pdf"

function Resume() {
  return (
    <object data={resume} type="application/pdf" width="100%" height="500px">
      <Typography>
        Your browser doesn't support embedded pdf files. You can download the
        file
        <Link href="https://drive.google.com/file/d/1TSGK8MtC0tzjvJM_77i1w0hLuCQ7Co-5/view?usp=sharing">
          &nbsp;here
        </Link>
        .
      </Typography>
    </object>
  )
}

export default Resume
