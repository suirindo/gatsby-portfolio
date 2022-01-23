import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import JSLogo from "../images/javascript.svg"
import ReactLogo from "../images/react.svg"
import GatsbyLogo from "../images/gatsby.svg"
import NextLogo from "../images/next.svg"


const Index  = () => {
  return (
    <>
      <div>
        <StaticImage src = "../images/index-hero.jpeg" alt = "hero" quality={90} placeholder="blurred" formats={["AUTO", "WEBP", "AVIF"]}/>
        <div>
          <h1>I'm asagiman</h1>
          <h3>JavaScript Developer</h3>
        </div>
      </div>
      <div>
        <div>
          <div>
            <h2>JavaScript Nerd</h2>
            <p>/////////////////////////////////////</p>
          </div>
          <StaticImage src="../images/profile.jpeg" alt = "profile" quality = {90} placeholder="blurred" formats = {["AUTO","WEBP", "AVIF"]} />
          <div>
            <h2>Skills</h2>
            <div>
              <div><img src = {JSLogo} alt = "javascript"/><span>JavaScript / 1years</span></div>
              <div><img src = {ReactLogo} alt = "react"/><span>React / 1years</span></div>
              <div><img src = {GatsbyLogo} alt = "gatsby"/><span>Gatsby / 1years</span></div>
              <div><img src = {NextLogo} alt = "next"/><span>Next.JS / 1years</span></div>
            </div>
          </div>
        </div>
        <div>
          <Link to = "/contact">Make It Happen!</Link>
        </div>
      </div>
    </>
  )
}

export default Index