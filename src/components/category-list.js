import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
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

  const categories = data.markdownRemark.frontmatter.categories

  return (
    <div>
      {categories.map((cat, index) => (
        <Link key={index} to={`/category/${slugify(cat)}`}>
          {cat}
        </Link>
      ))}
    </div>
  )
}

export default CategoryList
