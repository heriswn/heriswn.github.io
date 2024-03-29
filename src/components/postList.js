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
                  <div className="custom-link-postlist">
                    <h2>
                      <Link to={post.path} key={post.idUnique} itemProp="url">
                        <span itemProp="headline">{post.title}</span>
                      </Link>
                    </h2>
                  </div>
                  <Link to={post.path} key={post.idUnique} itemProp="url">
                    <small itemProp="headline">
                      https://heriswn.github.io{post.path}
                    </small>
                  </Link>
                </div>
              </header>
              <div>
                <p style={{marginBottom: "3px"}}>
                  <small>
                    <i>{post.date}</i>
                  </small>{" "}
                  •{" "}
                  <small>
                    <i>{post.read} min read</i>
                  </small>
                </p>
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