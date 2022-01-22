import * as React from "react"
import { Link } from "gatsby"
import * as style from "../styles/index.module.css"

const Index  = () => {
  return (
    <>
      <h1 className={style.h1Text}>Hello</h1>
      <Link to = "/contact">to Contact page</Link>
    </>

  )
}

export default Index