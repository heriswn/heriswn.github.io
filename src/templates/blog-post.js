import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { slugify } from "../utils/helper"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        image={
          data.site.siteMetadata.siteUrl + post.frontmatter.thumbnail.publicURL
        }
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">
            <span>{post.frontmatter.title}</span>
          </h1>
          <p>{post.frontmatter.description || post.excerpt}</p>
          <div className="meta">
            <div>
              <span>
                {post.frontmatter.author}, {post.frontmatter.date} •
              </span>
            </div>
            <div>
              <span className="main-bottom">
                {post.frontmatter.categories.map((cat, index) => (
                  <Link key={index} to={`/category/${slugify(cat)}`}>
                    {cat}
                  </Link>
                ))}
              </span>
            </div>
          </div>
          <div>
            <GatsbyImage
              image={post.frontmatter.thumbnail.childImageSharp.gatsbyImageData}
              className="post-image"
              alt={`${post.frontmatter.title}`}
            />
          </div>
          <span>{post.frontmatter.credit}</span>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <div className="meta">
          {post.frontmatter.tags.map((tagIndex, index) => (
            <li key={index} className="main-bottom">
              <Link to={`/tag/${slugify(tagIndex)}`}>#{tagIndex}</Link>
            </li>
          ))}
        </div>
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title}
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
        siteUrl
        image
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 50)
      html
      headings {
        value
        depth
      }
      frontmatter {
        title
        author
        date(formatString: "MMMM DD, YYYY")
        description
        categories
        tags
        credit
        thumbnail {
          publicURL
          childImageSharp {
            gatsbyImageData(width: 900, placeholder: BLURRED)
          }
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
