import * as React from "react"
import "../styles.css"
import { Slice } from "gatsby"

const Layout = ({ children }) => {
  return (
    <>
      <Slice alias="header" />
      {children}
      <Slice alias="contact-us" />
      <Slice alias="footer" />
    </>
  )
}

export default Layout
