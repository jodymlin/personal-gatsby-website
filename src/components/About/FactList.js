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
    description: `Programming languages, but also speaking! I love learning to 
        speak new languages and am currently learning Mandarin and Korean!
        In the future, I plan to also learn Japanese. Also discovered I have a love
        for linguistics and enjoy taking linguistic classes at school. `,
  },
  {
    title: `Teaching`,
    description: `I am currently the Vice President of UCLA ACM Hack and 
        have taught Python, Web Dev, and Android Mobile development in our workshops!
        I also used to be a Code Coach at theCoderSchool where I taught young kids
        how to program in Python, HTML/CSS, and Scratch.`,
  },
  {
    title: `Work Experience`,
    description: `The past summer 2020, I had a wonderful time interning at
    Amazon Web Services on the Wallaby Team. I had an amazing time getting
    to know my mentor and my manager and couldn't have made it through without
    them. I also learned a lot about AWS while independently working on my 
    intern project :)`
  }
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
