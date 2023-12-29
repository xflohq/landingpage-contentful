import * as React from "react"
import "../styles.css"
import { Slice } from "gatsby"

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <Slice alias="contact-us" />
      <Slice alias="footer" />
    </>
  )
}

export default Layout
