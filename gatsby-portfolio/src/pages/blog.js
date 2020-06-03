import React from "react"
import Link from "gatsby-link"
import { graphql } from "gatsby"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import "../css/Blog.css"

const BlogPage = ({ data }) => (
  <div>
    <Header content={"Outlook"} />
    <Navbar />

    <br />

    <div className="blogs-container">
      {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id}>
          <Link to={post.node.frontmatter.path} className="heading-link">
            {" "}
            <h3> {post.node.frontmatter.title} </h3>
            <small className="date"> {post.node.frontmatter.date}</small>
            <br />
            <br />
            <Link to={post.node.frontmatter.path} className="read-more">
              Read more. . . &nbsp;&nbsp;
            </Link>
          </Link>
          <br />
        </div>
      ))}
    </div>
    <hr />
  </div>
)

// Graphql query
export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date
            path
          }
        }
      }
    }
  }
`

// export const pageQuery = graphql`
//   query BlogPostByPath($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       frontmatter {
//         path
//         title
//         date
//       }
//     }
//   }
// `
// `
export default BlogPage
