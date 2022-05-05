import React from "react"
import { Link } from "gatsby"
import { slugify } from "../utils/helper"

const ToC = ({ headings }) => (
  <ul className="ul-toc">
    <h4>Table of contents</h4>
    {headings.map(heading => {
      if (heading.depth > 4) {
        return <div />
      }

      return (
        <li key={heading.value}>
          <a href={`#${slugify(heading.value)}`} className="link-toc">
            {heading.value}
          </a>
        </li>
      )
    })}
  </ul>
)

export default ToC