import { React, useState } from "react"
import { Link } from "react-router-dom"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import InstagramIcon from "@material-ui/icons/Instagram"
import "./showcase-page.css"

export default function ShowcasePage({ name, deals, socials, tags }) {
  const [open, setOpen] = useState(false)

  const [activeDeal, setActiveDeal] = useState({ name: "", offer: "" })

  const handleClickOpen = (selectedDeal) => {
    setActiveDeal({ name: selectedDeal.name, deal: selectedDeal.offer })
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  // todo - make columns 2 wide when on mobile

  return (
    <>
      <h2>{name}</h2>
      <div className="tags-list">
        {tags.map((tag) => {
          return " " + tag + ", "
        })}
      </div>
      <img
        className="profile-image"
        src="https://i.insider.com/5e14563c855cc23d4d6f14f3?width=1136&format=jpeg"
      />

      <div className="showcase-bio">
        Hi Guys! Welcome to my Discoverr showcase. I am Barney Banks, a UK based
        Content creator, gamer, model, and all round legend. Check out my
        socials below as well as the discounts i have with my trusted brands
        such as The Protein Works! Thank you for the support, BOSH!
      </div>

      <h4>Keep up with {name}</h4>

      <div className="socials-list">
        {socials.map((social) => {
          return (
            <div className="socials-list-item">
              <a href={social.link} target="_blank" rel="noreferrer">
                {social.social}
                <InstagramIcon></InstagramIcon>
              </a>
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
          <Button onClick={handleClose} color="danger">
            Cancel
          </Button>
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
