import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

const Layout = prop => {
  return (
    <div>
      <Header />
      {prop.children}
      <Footer />
    </div>
  )
}

export default Layout
