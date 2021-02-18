import { React, useState } from "react"
import "./showcase-page.css"
export default function ShowcasePage({ name, deals }) {
  // todo - make columns 2 wide when on mobile
  const [showDeal, setShowDeal] = useState(false)

  const handleClick = () => {
    setShowDeal(true)
  }
  return (
    <>
      <h2>{name}'s Showcase</h2>

      <p>
        Support {name}'s content by getting offers from top brands - it's a win
        win!
      </p>

      <h4>My Deals</h4>

      <div className="deals-container">
        {deals.map((deal) => {
          return (
            <div className="item">
              <div>{deal.name} </div>
              <div>{deal.offer}</div>
              <button className="deal-button" onClick={() => handleClick()}>
                Get Deal!
              </button>
              {showDeal ? deal.name + name + "2021" : ""}
            </div>
          )
        })}
      </div>
    </>
  )
}
