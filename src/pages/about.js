import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"

const AboutPage = () => {
  return (
    <div>
      <Header />
      <h1>About Me</h1>
      <p>I'm Suman, a full-stack developer living in Hyderabad, India.</p>
      <p>
        Want to work with me? <Link to="/contact">Contact Me!</Link>
      </p>
      <Footer />
    </div>
  )
}

export default AboutPage
