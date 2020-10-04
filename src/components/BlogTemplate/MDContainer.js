import React from "react"
import "./md-css.css"

function MDContainer({ html }) {
  return (
    <div className="md_container" dangerouslySetInnerHTML={{ __html: html }} />
  )
}

export default MDContainer
