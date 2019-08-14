import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <h1>About Me</h1>
        <p>I'm Suman, a full-stack developer living in Hyderabad, India.</p>
        <p>
          Want to work with me? <Link to="/contact">Contact Me!</Link>
        </p>
      </Layout>
    </div>
  )
}

export default AboutPage
