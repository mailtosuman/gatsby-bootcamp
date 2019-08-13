import React from "react"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <div>
      <h1>Hello.</h1>
      <h2>I'm Suman, a full-stack developer living in Hyderabad, India</h2>
      <p>
        Want to work with me? <Link to="/contact">Contact Me!</Link>
      </p>
    </div>
  )
}

export default IndexPage
