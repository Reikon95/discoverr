import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import InstagramIcon from "@material-ui/icons/Instagram"
import FacebookIcon from "@material-ui/icons/Facebook"
import TwitterIcon from "@material-ui/icons/Twitter"
import MusicNoteIcon from "@material-ui/icons/MusicNote"
import "../../_variables.scss"

import "./showcase-page.scss"


export default function ShowcasePage({ name, deals, socials, tags, bio }) {
  const [open, setOpen] = useState(false)

  const [activeDeal, setActiveDeal] = useState({ name: "", offer: "" })

  const handleClickOpen = (selectedDeal) => {
    setActiveDeal({ name: selectedDeal.name, offer: selectedDeal.offer })
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const renderCorrectSocials = (social) => {
    switch (social) {
      case "Instagram":
        return <InstagramIcon></InstagramIcon>
      case "Facebook":
        return <FacebookIcon></FacebookIcon>
      case "Twitter":
        return <TwitterIcon></TwitterIcon>
      case "TikTok":
        return <MusicNoteIcon></MusicNoteIcon>
      default:
        return social
    }
  }


  return (
    <>
    <div className="showcase-intro-container">
      <h1 className=" showcase-name-header">{name}</h1>
      <div className="tags-list">
        {tags.map((tag) => {
          return " " + tag + ", "
        })}
      </div>
      <img
        className="profile-image"
        src="https://i.insider.com/5e14563c855cc23d4d6f14f3?width=1136&format=jpeg"
      />

<div className="socials-list">
        {socials.map((social) => {
          return (
            <div className="socials-list-item">
              <a href={social.link} target="_blank" rel="noreferrer">
                {renderCorrectSocials(social.social)}
              </a>
            </div>
          )
        })}
      </div>
      <div className="showcase-bio">{bio}</div>



      <Button className="support-me-button">
        Support Me
      </Button>
      </div>
      <h1 className="h1-header">DEALS & DISCOUNTS</h1>

      <div className="deals-container">
        {deals.map((deal) => {
          return (
            <div className="item">
              <div>{deal.name} </div>
              <div>{deal.offer}</div>

              <Button
                variant="outlined"
                onClick={() => handleClickOpen(deal)}
                className="deal-button"
              >
                Get Deal!
              </Button>
            </div>
          )
        })}
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Barney's {activeDeal.name} Deal
        </DialogTitle>

        <DialogContent>
          <img
            src="https://i.pinimg.com/originals/32/23/36/322336e667f7c01bb95681c82cbd5684.jpg"
            className="deal-image"
          />
          <DialogContentText>Deal Code: CRISTIANO2021</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button color="primary">
            <a href="https://www.nike.com/gb/" target="_blanl">
              GO TO NIKE!
            </a>
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
