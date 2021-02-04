import { React, useState } from "react"
import { useTable } from "react-table"
import "./showcase-page.css"
export default function ShowcasePage({ name }) {
  return (
    <>
      <h2>{name}'s Showcase</h2>

      <h4>My Deals</h4>

      <div className="deals-container">
        <div className="item">Macron 10% off!</div>
        <div className="item">Gymshark 10% off!</div>
        <div className="item">Canterbury 10% off!</div>
        <div className="item">Red Bull 10% off!</div>
        <div className="item">Netflix 10% off!</div>
        <div className="item">Nike 10% off!</div>
        <div className="item">Cadbury 10% off!</div>
        <div className="item">MyProtein 10% off!</div>
        <div className="item">Huel 10% off!</div>
        <div className="item">York Fitness 10% off!</div>
        <div className="item">Walkers 10% off!</div>
        <div className="item">Maximuscle 10% off!</div>
      </div>
    </>
  )
}
