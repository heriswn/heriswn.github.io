import React, { Component } from "react"
import { Link } from "gatsby"

export default class PostListing extends Component {
  getPostList() {
    const { postEdges } = this.props
    const postList = postEdges
      // .filter(
      //   postEdge =>
      //     postEdge.frontmatter.template === "Post"
      // )
      .map(postEdge => {
        return {
          path: postEdge.fields.slug,
          title: postEdge.frontmatter.title,
        }
      })
    return postList
  }

  render() {
    const postList = this.getPostList()

    return (
      <section>
        {postList.map(post => {
          return (
            <Link to={post.path} key={post.title}>
              <div>
                <h2>{post.title}</h2>
              </div>
            </Link>
          )
        })}
      </section>
    )
  }
}