import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/About"
import Header from "../components/Header"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Header />
    <About />

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
