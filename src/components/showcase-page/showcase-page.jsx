import { React, useState } from "react"
import { Link } from "react-router-dom"
import "./showcase-page.css"
import Button from '@material-ui/core/Button';

export default function ShowcasePage({ name, deals, socials }) {
  // todo - make columns 2 wide when on mobile

  return (
    <>
      <h2>{name}'s Showcase</h2>
      <img className="profile-image" src="https://i.insider.com/5e14563c855cc23d4d6f14f3?width=1136&format=jpeg"/>
      <p>
        Support {name}'s content by getting offers from top brands - it's a win
        win!
      </p>

      <h4>Keep up with {name}</h4>
      <div className="socials-list">
      {socials.map((social) => {
        return(
          <div className="socials-list-item">
          <Link to={social.link}>{social.social}</Link>
          </div>
        )
      })}
</div>
      <h4>My Deals</h4>

      <div className="deals-container">
        {deals.map((deal) => {
          return (
            <div className="item">
              <div>{deal.name} </div>
              <div>{deal.offer}</div>

              {deal.showDeal ? deal.name + name + "2021" : <Button className="deal-button" variant="contained" color="primary" href="#contained-buttons">

                Get Deal!
              </Button>}
            </div>
          )
        })}
      </div>
    </>
  )
}
