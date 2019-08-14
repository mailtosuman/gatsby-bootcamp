import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"

const IndexPage = () => {
  return (
    <div>
      <Header />
      <h1>Hello.</h1>
      <h2>I'm Suman, a full-stack developer living in Hyderabad, India</h2>
      <p>
        Want to work with me? <Link to="/contact">Contact Me!</Link>
      </p>
      <Footer />
    </div>
  )
}

export default IndexPage
