import React, { Component } from "react"
import { Link } from "gatsby"

export default class PostListing extends Component {
  getPostList() {
    const { postEdges } = this.props
    const postList = postEdges
      .map(postEdge => {
        return {
          idUnique: postEdge.id,
          path: postEdge.fields.slug,
          title: postEdge.frontmatter.title,
          read: postEdge.timeToRead,
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
                    <Link
                      to={post.path}
                      key={post.idUnique}
                      itemProp="url"
                      className="postList-link"
                    >
                      <span itemProp="headline">{post.title}</span>
                    </Link>
                  </h2>
                  <p>
                    <small>{post.date}</small> • <small>{post.read} min read</small>
                  </p>
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