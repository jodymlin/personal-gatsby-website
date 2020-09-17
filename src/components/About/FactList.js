import React from "react"

import Typography from "@material-ui/core/Typography"
import FunFact from "./FunFact"

const facts = [
  {
    title: `Hometown`,
    description: `Irvine, California`,
  },
  {
    title: `Hobbies`,
    description: `Playing guitar and going on hikes!`,
  },
  {
    title: `Languages`,
    description: `Programming languages, but also speaking! 
        I love learning to speak new languages and am currently learning Mandarin!
        Future languages to learn include Japanese, Korean, and French.`,
  },
  {
    title: `Teaching`,
    description: `I am currently the Vice President of UCLA ACM Hack and 
        have taught Python, Web Dev, and Android Mobile development in our workshops!
        I also used to be a Code Coach at theCoderSchool where I taught young kids
        how to program in Python, HTML/CSS, and Scratch.`,
  },
]

function FactList() {
  const funFacts = facts.map(o => <FunFact key={o.title} {...o} />)
  return (
    <div>
      <Typography>Some fun facts about me...</Typography>
      {funFacts}
    </div>
  )
}

export default FactList
