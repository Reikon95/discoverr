import React from "react"
import { Button } from "@material-ui/core"
import "./landing-page.scss"
import { Link } from "react-router-dom"

export default function LandingPage() {
  return (
    <>
      <div className="landing-primary-info">
        <h1 className="header-text">Welcome To Discoverr.</h1>
        <div>
          Discoverr is the new way to connect with your supporters by promoting
          your latest content, advertising your merchandise and providing a
          platform for them to connect with the brands you love.
        </div>
        <div>
          We're currently accepting a pilot audience of content creators with
          more than 2000 followers on any social media platform. Sign up takes
          just a few clicks!
        </div>
        <div>
          <Link to="/signup">
            <Button>Get Started!</Button>
          </Link>
        </div>
      </div>
    </>
  )
}
