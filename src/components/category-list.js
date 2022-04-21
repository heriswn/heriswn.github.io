import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { slugify } from "../utils/helper"

const CategoryList = () => {
  const data = useStaticQuery(graphql`
    query CategoryListQuery {
      markdownRemark {
        frontmatter {
          categories
        }
      }
    }
  `)

  const category = data.markdownRemark.frontmatter.categories

  return (
    <div>
      {category.map((cat, index) => (
        <Link key={index} to={`/category/${slugify(cat)}`}>
          {cat}
        </Link>
      ))}
    </div>
  )
}

export default CategoryList
