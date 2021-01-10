import { React } from "react"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import DeleteIcon from "@material-ui/icons/Delete"

import Icon from "@material-ui/core/Icon"
import SaveIcon from "@material-ui/icons/Save"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import Input from "@material-ui/core/Input"
import "./profile-page.css"

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}))

function createData(name, instagram, youtube, twitter, tiktok, tags) {
  return { name, instagram, youtube, twitter, tiktok, tags }
}

const rows = [
  createData("Instagram", 12360, "YES", 9, "28.6%", [
    "Fortnite",
    "Streaming",
    "Fortnite",
  ]),
  createData("Twitch", 3104010, "YES", 63, "63.2%", [
    "Ice Hockey",
    "Sports Coaching",
  ]),
  createData("Youtube", 2602120, "YES", 12, "18.4%", [
    "Programming",
    "Coding",
    "Javascript",
  ]),
  createData("Twitter", 121976, "YES", 27, "8.1%", [
    "Football (Soccer)",
    "Athletes",
  ]),
]

function createTagList(tags) {
  return tags.join(", ")
}

export default function ProfilePage({user}) {
  const classes = useStyles()

  return (
    <>
      <h1>{user}</h1>
      Hello, I'm Ninja. I am mainly known for streaming the battle royale game
      Fortnite on Twitch. I work with a variety of brands but am mainly focused
      on the technology industry.
      <h3>Ninja Accepts Brand Deals On the following channels </h3>
      <TableContainer
        component={Paper}
        className="container profile-page-table"
      >
        <Table className={classes.table} stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Channel</TableCell>
              <TableCell align="right">Followers</TableCell>
              <TableCell align="right">Verified?</TableCell>
              <TableCell align="right">Posts in last 3 months</TableCell>
              <TableCell align="right">Av.Engagement Rate (3 months)</TableCell>
              <TableCell align="right">Most tagged</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  <a href="https:/www.bbc.co.uk" target="_blank">
                    {row.name}
                  </a>
                </TableCell>
                <TableCell align="right">{row.instagram}</TableCell>
                <TableCell align="right">{row.youtube}</TableCell>
                <TableCell align="right">{row.twitter}</TableCell>
                <TableCell align="right">{row.tiktok}</TableCell>
                <TableCell align="right">{createTagList(row.tags)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="form-container">
        <div>
          <label>Name: </label>
          <input type="text"></input>
        </div>
        <div>
          <label>Company: </label>
          <input type="text"></input>
        </div>
        <textarea placeholder="Your message here"></textarea>
        <button>Send</button>
      </div>
    </>
  )
}
