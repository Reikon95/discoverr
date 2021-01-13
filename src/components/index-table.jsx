import { React, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import Slider from "@material-ui/core/Slider"

import "./index-table.css"
import ProfilePage from "./profile-page/profile-page"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom"

// - filter country and language (this could be two filters (France, English))
// - Age (if publically available) - including their follower base, if available
// if they're verified through US

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

function createData(name, instagram, youtube, twitter, tiktok, tags) {
  return { name, instagram, youtube, twitter, tiktok, tags }
}

const rows = [
  createData("Ninja", 12360, 15390000, 22524, 460000, [
    "Gaming",
    "Streaming",
    "Fortnite",
  ]),
  createData("Coach Jeremy", 210000, 181000, 37342, 43124, [
    "Ice Hockey",
    "Sports Coaching",
  ]),
  createData("Dan Abramov", 2620, 160000, 242031, 0, [
    "Programming",
    "Coding",
    "Javascript",
  ]),
  createData("Cristiano Ronaldo", 120000000, 0, 2100000, 4342012, [
    "Football (Soccer)",
    "Athletes",
  ]),
  createData("Yung Lean", 35600, 21000, 0, 0, [
    "Musician",
    "Rapper",
    "Fashion",
  ]),
  createData("Ninja", 12360, 15390000, 22524, 460000, [
    "Gaming",
    "Streaming",
    "Fortnite",
  ]),
  createData("Coach Jeremy", 210000, 181000, 37342, 43124, [
    "Ice Hockey",
    "Sports Coaching",
  ]),
  createData("Dan Abramov", 2620, 160000, 242031, 0, [
    "Programming",
    "Coding",
    "Javascript",
  ]),
  createData("Cristiano Ronaldo", 120000000, 0, 2100000, 4342012, [
    "Football (Soccer)",
    "Athletes",
  ]),
  createData("Yung Lean", 35600, 21000, 0, 0, [
    "Musician",
    "Rapper",
    "Fashion",
  ]),
  createData("Yung Lean", 35600, 21000, 0, 0, [
    "Musician",
    "Rapper",
    "Fashion",
  ]),
  createData("Ninja", 12360, 15390000, 22524, 460000, [
    "Gaming",
    "Streaming",
    "Fortnite",
  ]),
  createData("Coach Jeremy", 210000, 181000, 37342, 43124, [
    "Ice Hockey",
    "Sports Coaching",
  ]),
  createData("Dan Abramov", 2620, 160000, 242031, 0, [
    "Programming",
    "Coding",
    "Javascript",
  ]),
  createData("Cristiano Ronaldo", 120000000, 0, 2100000, 4342012, [
    "Football (Soccer)",
    "Athletes",
  ]),
  createData("Yung Lean", 35600, 21000, 0, 0, [
    "Musician",
    "Rapper",
    "Fashion",
  ]),
  createData("Yung Lean", 35600, 21000, 0, 0, [
    "Musician",
    "Rapper",
    "Fashion",
  ]),
  createData("Yung Lean", 35600, 21000, 0, 0, [
    "Musician",
    "Rapper",
    "Fashion",
  ]),

  createData("Ninja", 12360, 15390000, 22524, 460000, [
    "Gaming",
    "Streaming",
    "Fortnite",
  ]),
  createData("Coach Jeremy", 210000, 181000, 37342, 43124, [
    "Ice Hockey",
    "Sports Coaching",
  ]),
  createData("Dan Abramov", 2620, 160000, 242031, 0, [
    "Programming",
    "Coding",
    "Javascript",
  ]),
  createData("Cristiano Ronaldo", 120000000, 0, 2100000, 4342012, [
    "Football (Soccer)",
    "Athletes",
  ]),
  createData("Ninja", 12360, 15390000, 22524, 460000, [
    "Gaming",
    "Streaming",
    "Fortnite",
  ]),
  createData("Coach Jeremy", 210000, 181000, 37342, 43124, [
    "Ice Hockey",
    "Sports Coaching",
  ]),
  createData("Dan Abramov", 2620, 160000, 242031, 0, [
    "Programming",
    "Coding",
    "Javascript",
  ]),
  createData("Cristiano Ronaldo", 120000000, 0, 2100000, 4342012, [
    "Football (Soccer)",
    "Athletes",
  ]),
  createData("Yung Lean", 35600, 21000, 0, 0, [
    "Musician",
    "Rapper",
    "Fashion",
  ]),
  createData("Yung Lean", 35600, 21000, 0, 0, [
    "Musician",
    "Rapper",
    "Fashion",
  ]),
  createData("Yung Lean", 35600, 21000, 0, 0, [
    "Musician",
    "Rapper",
    "Fashion",
  ]),
  createData("Ninja", 12360, 15390000, 22524, 460000, [
    "Gaming",
    "Streaming",
    "Fortnite",
  ]),
  createData("Coach Jeremy", 210000, 181000, 37342, 43124, [
    "Ice Hockey",
    "Sports Coaching",
  ]),
  createData("Dan Abramov", 2620, 160000, 242031, 0, [
    "Programming",
    "Coding",
    "Javascript",
  ]),
  createData("Cristiano Ronaldo", 120000000, 0, 2100000, 4342012, [
    "Football (Soccer)",
    "Athletes",
  ]),
  createData("Yung Lean", 35600, 21000, 0, 0, [
    "Musician",
    "Rapper",
    "Fashion",
  ]),
]

let filteredView = rows

function createTagList(tags) {
  return tags.join(", ")
}

function filterByTags(tags) {
  let filteredArray = rows.filter((row) => {
    for (let tag of row.tags) {
      if (tags.includes(tag)) {
        console.log(tags, tag)
        return row
      }
    }
  })
  filteredView = filteredArray
  return
}

function clearAllFilters() {
  filteredView = rows
}

function instagramValueText(value) {
  return `${value}K`
}

export default function IndexTable() {
  const classes = useStyles()
  console.log(filterByTags(["Fortnite"]))
  const [instagramFollowers, setInstagramFollowers] = useState([0, 10000000])

  function handleInstagramFollowersChange(e, newValue) {
    setInstagramFollowers(newValue)
  }

  return (
    <>
      <h1>Available Influencers</h1>
      Click to enter the profile of each influencer for more detailed analysis.
      <h3>Filters</h3>
      <label>Tags</label>
      <input type="text" />
      <label>Country</label>
      <input type="text" />
      <label>Language</label>
      <select>
        <option>English</option>
        <option>German (Deustch)</option>
        <option>French (Francais)</option>
        <option>Spanish (Espanol)</option>
      </select>
      <label>Instagram Followers (000's)</label>
      <Slider
        value={instagramFollowers}
        onChange={handleInstagramFollowersChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={instagramValueText}
        min={0}
        max={1000}
        step={1}
        className="range-slider"
      />
      <label>Youtube Subscribers</label>
      <input type="range" min="0" max="100000000" step="2500" />{" "}
      <label>Twitter Followers</label>
      <input type="range" min="0" max="100000000" step="2500" />{" "}
      <label>TikTok Followers</label>
      <input type="range" min="0" max="100000000" step="2500" />{" "}
      <label>Facebook Followers</label>
      <input type="range" min="0" max="100000000" step="2500" />
      <button>Clear All Filters</button>
      <TableContainer component={Paper} className="container">
        <Table className={classes.table} stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Influencer</TableCell>
              <TableCell align="right">Instagram Followers</TableCell>
              <TableCell align="right">Youtube Subscribers</TableCell>
              <TableCell align="right">Twitter Followers</TableCell>
              <TableCell align="right">TikTok Followers</TableCell>
              <TableCell align="right">Tags</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredView.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  <Link to="/Ninja">{row.name}</Link>
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
    </>
  )
}
