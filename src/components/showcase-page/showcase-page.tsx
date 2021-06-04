import React, { useEffect } from "react"
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
import axios from "axios"

export default function ShowcasePage({
  name,
  deals,
  socials,
  tags,
  bio,
  merch,
  email,
  discoverrId,
}) {
  const [hasLoaded, setHasLoaded] = useState(false)
  const [showcaseData, setShowcaseData] = useState(null)
  const getShowcaseProfile = async () => {
    try {
      await axios
        .get(
          "http://localhost:5000/users/getuserbyid/?id=112152278584364206992"
        )
        .then((res) => {
          console.log(res.data[0])
          setShowcaseData(res.data[0])
        })
    } catch (error) {
      console.log(error)
    }

    setHasLoaded(true)
  }

  useEffect(() => {
    getShowcaseProfile()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [open, setOpen] = useState(false)
  const [activeDeal, setActiveDeal] = useState({ name: "", offer: "" })

  const handleClickOpen = (selectedDeal) => {
    setActiveDeal({ name: selectedDeal.name, offer: selectedDeal.offer })
    setOpen(true)
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
      {hasLoaded ? (
        <div className="showcase-container">
          <div className="showcase-entry-container">
            <div className="creator-image-wrapper">
              <div className="creator-image">
                {" "}
                <img className="profile-image" src={showcaseData.imageUrl} />
              </div>
              <div className="creator-socials">
                {socials.map((social) => {
                  return (
                    <div className="socials-item">
                      <a href={social.link} target="_blank" rel="noreferrer">
                        {renderCorrectSocials(social.social)}
                      </a>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="creator-details">
              <div className="creator-name">{showcaseData.name}</div>
              <div className="creator-tags">
                {" "}
                {tags.map((tag) => {
                  return " " + tag + ", "
                })}
              </div>
              <div className="creator-bio">{showcaseData.bio}</div>
            </div>

            <div className="creator-support-buttons vertical-stack">
              <Button
                color="primary"
                variant="contained"
                className="support-button"
              >
                FOLLOW ME
              </Button>
              <Button
                color="primary"
                variant="contained"
                className="support-button"
              >
                SUPPORT ME
              </Button>
            </div>
          </div>
          <div className="creator-latest-uploads">
            <div>MY LATEST UPLOADS</div>
            <div>
              <div>UPLOAD</div>
              <div>UPLOAD</div>
              <div>UPLOAD</div>
            </div>
          </div>
          <div className="deals-and-discounts-container">
            <div>DEALS AND DISCOUNTS</div>
            <div className="deals-and-discounts-grid three-column-grid">
              {deals.map((deal) => {
                return (
                  <div className="deal-item">
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
          </div>
          <div className="merch-container">
            <div>MERCH</div>
            <div className="three-column-grid">
              {deals.map((deal) => {
                return (
                  <div className="deal-item">
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
          </div>
        </div>
      ) : (
        <>Loading...</>
      )}
      {/* <div className="showcase-container">
        <div className="showcase-entry-container">
          <div className="creator-image-wrapper">
            <div className="creator-image">
              {" "}
              <img
                className="profile-image"
                src="https://i.insider.com/5e14563c855cc23d4d6f14f3?width=1136&format=jpeg"
              />
            </div>
            <div className="creator-socials">
              {socials.map((social) => {
                return (
                  <div className="socials-item">
                    <a href={social.link} target="_blank" rel="noreferrer">
                      {renderCorrectSocials(social.social)}
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="creator-details">
            <div className="creator-name">{showcaseData.name}</div>
            <div className="creator-tags">
              {" "}
              {tags.map((tag) => {
                return " " + tag + ", "
              })}
            </div>
            <div className="creator-bio">{showcaseData.bio}</div>
          </div>

          <div className="creator-support-buttons vertical-stack">
            <Button
              color="primary"
              variant="contained"
              className="support-button"
            >
              FOLLOW ME
            </Button>
            <Button
              color="primary"
              variant="contained"
              className="support-button"
            >
              SUPPORT ME
            </Button>
          </div>
        </div>
        <div className="creator-latest-uploads">
          <div>MY LATEST UPLOADS</div>
          <div>
            <div>UPLOAD</div>
            <div>UPLOAD</div>
            <div>UPLOAD</div>
          </div>
        </div>
        <div className="deals-and-discounts-container">
          <div>DEALS AND DISCOUNTS</div>
          <div className="deals-and-discounts-grid three-column-grid">
            {deals.map((deal) => {
              return (
                <div className="deal-item">
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
        </div>
        <div className="merch-container">
          <div>MERCH</div>
          <div className="three-column-grid">
            {deals.map((deal) => {
              return (
                <div className="deal-item">
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
        </div>
      </div> */}
    </>
  )
}
