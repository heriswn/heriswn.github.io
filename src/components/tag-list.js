import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { slugify } from "../utils/helper"

const TagList = () => {
  const data = useStaticQuery(graphql`
    query TagListQuery {
      markdownRemark {
        frontmatter {
          tags
        }
      }
    }
  `)

  const tags = data.markdownRemark.frontmatter.tags

  return (
    <div>
      <small>Tags:</small>
      {tags.map((tag, index) => (
        <li key={index}>
          <Link to={`/tag/${slugify(tag)}`}>{tag}</Link>
        </li>
      ))}
    </div>
  )
}

export default TagList
