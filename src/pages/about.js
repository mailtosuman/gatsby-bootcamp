import React from "react"
import { Link } from "gatsby"

const AboutPage = () => {
  return (
    <div>
      <h1>About Me</h1>
      <p>I'm Suman, a full-stack developer living in Hyderabad, India.</p>
      <p>
        Want to work with me? <Link to="/contact">Contact Me!</Link>
      </p>
    </div>
  )
}

export default AboutPage
