import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PostListing from "../components/postList"

const CategoryPageTemplate = ({ data, location, pageContext }) => {
  const posts = data?.allMarkdownRemark.nodes || []
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo location={location} title={pageContext?.category} />
      <h1>
        <span className="category-tag">{pageContext?.category}</span>
      </h1>
      <PostListing postEdges={posts} />
    </Layout>
  )
}

export default CategoryPageTemplate

export const pageQuery = graphql`
  query CategoryPageByType($category: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { categories: { eq: $category } } }
    ) {
      nodes {
        id
        excerpt
        fields {
          slug
        }
        timeToRead
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
