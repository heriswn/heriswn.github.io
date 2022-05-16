import React, { Component } from "react"
import { Link } from "gatsby"

export default class PostListing extends Component {
  getPostList() {
    const { postEdges } = this.props
    const postList = postEdges
      .map(postEdge => {
        return {
          path: postEdge.fields.slug,
          title: postEdge.frontmatter.title,
          date: postEdge.frontmatter.date,
          description: postEdge.frontmatter.description || postEdge.excerpt,
        }
      })
    return postList
  }

  render() {
    const postList = this.getPostList()

    return (
      <div>
        {postList.map(post => {
          return (
            <article
              className="post-list-item"
              itemScope
              itemType="http://schema.org/Article"
            >
              <header>
                <div>
                  <h2>
                    <Link to={post.path} key={post.title} itemProp="url">
                      <span itemProp="headline">{post.title}</span>
                    </Link>
                  </h2>
                  <small>{post.date}</small>
                </div>
              </header>
              <div>
                <p
                  dangerouslySetInnerHTML={{
                    __html: post.description,
                  }}
                  itemProp="description"
                />
              </div>
            </article>
          )
        })}
      </div>
    )
  }
}