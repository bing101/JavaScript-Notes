import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/About"
import Header from "../components/Header"
// import BlogPage from "../pages/blog"
// import Navbar from "../components/Navbar"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header content={"Arjun"} />
    <About />
  </Layout>
)

export default IndexPage
