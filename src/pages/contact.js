import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

const contactPage = () => {
  return (
    <div>
      <Header />
      <h1>Contact Me</h1>
      <p>
        Best way to reach me is on
        <a href="https://twitter.com/@SumanMishra" target="_blank">
          Twitter
        </a>
      </p>
      <Footer />
    </div>
  )
}

export default contactPage
