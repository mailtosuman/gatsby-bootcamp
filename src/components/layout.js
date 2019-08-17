import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/index.scss"

import layoutStyles from "../components/layout.module.scss"

const Layout = prop => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {prop.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
