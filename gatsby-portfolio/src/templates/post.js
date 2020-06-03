import React from "react"
import Link from "gatsby-link"
import Navbar from "../components/Navbar"
import "../css/posts.css"
// data prop is the query injected by graphql schema

const template = ({ data }) => {
  // Pulling markdownRemark from data and assigning to post
  const post = data.markdownRemark
  return (
    <div>
      <Navbar />
      <Link to="/blog"> Go back </Link>
      <hr />
      <div className="container">
        <h1 className="header">{post.frontmatter.title}</h1>
        <h4>{post.frontmatter.date}</h4>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date
      }
    }
  }
`
export default template
