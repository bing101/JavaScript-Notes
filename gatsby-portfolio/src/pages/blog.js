import React from "react"
import Link from "gatsby-link"
import { graphql } from "gatsby"
import Navbar from "../components/Navbar"
import "../css/Blog.css"

const BlogPage = ({ data }) => (
  <div>
    <Navbar />
    <div className="blog-header">
      <h1>Latest Posts</h1>
    </div>

    <br />

    <div className="blogs-container">
      {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id}>
          <h3> {post.node.frontmatter.title} </h3>
          <small> {post.node.frontmatter.date}</small>
          <br />
          <br />
          <Link to={post.node.frontmatter.path}>Read more . .</Link>
          <br />
        </div>
      ))}
    </div>
    <hr />
  </div>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            path
            path
          }
        }
      }
    }
  }
`
export default BlogPage
