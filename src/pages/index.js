import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello.</h1>
      <h2>I'm Suman, a full-stack developer living in Hyderabad, India</h2>
      <p>
        Want to work with me? <Link to="/contact">Contact Me!</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
