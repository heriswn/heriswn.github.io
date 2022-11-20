import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PostListing from "../components/postList"

const TagPageTemplate = ({ data, location, pageContext }) => {
  let { tag } = pageContext
  const posts = data?.allMarkdownRemark.nodes || []
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo location={location} title={tag} />
        <h1><span className="category-tag">#{tag}</span></h1>
      <PostListing postEdges={posts} />
    </Layout>
  )
}

export default TagPageTemplate

export const pageQuery = graphql`
  query TagPageByType($tag: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { tags: { eq: $tag } } }
    ) {
      nodes {
        id
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
