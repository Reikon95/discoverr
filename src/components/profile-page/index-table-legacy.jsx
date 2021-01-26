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
import TableSortLabel from "@material-ui/core/TableSortLabel"

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


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

function createData(name, instagram, youtube, twitter, tiktok, tags, country) {
  return { name, instagram, youtube, twitter, tiktok, tags, country }
}

const rows = [
  createData(
    "Ninja",
    12360,
    15390000,
    22524,
    460000,
    ["Gaming", "Streaming", "Fortnite"],
    "USA"
  ),
  createData(
    "Coach Jeremy",
    210000,
    181000,
    37342,
    43124,
    ["Ice Hockey", "Sports Coaching"],
    "Canada"
  ),
  // createData(
  //   "Dan Abramov",
  //   2620,
  //   160000,
  //   242031,
  //   0,
  //   ["Programming", "Coding", "Javascript"],
  //   "UK"
  // ),
  // createData(
  //   "Cristiano Ronaldo",
  //   120000000,
  //   0,
  //   2100000,
  //   4342012,
  //   ["Football (Soccer)", "Athletes"],
  //   "USA"
  // ),
  // createData(
  //   "Yung Lean",
  //   35600,
  //   21000,
  //   0,
  //   0,
  //   ["Musician", "Rapper", "Fashion"],
  //   "Sweden"
  // ),
  // createData(
  //   "Ninja",
  //   12360,
  //   15390000,
  //   22524,
  //   460000,
  //   ["Gaming", "Streaming", "Fortnite"],
  //   "USA"
  // ),
]

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) return order
    return a[1] - b[1]
  })
  return stabilizedThis.map((el) => el[0])
}

let filteredView = rows

function createTagList(tags) {
  return tags.join(", ")
}

function filterByTags(tags) {
  let filteredArray = rows.filter((row) => {
    for (let tag of row.tags) {
      if (tags.includes(tag)) {
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

export default function IndexTable(props) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props

  const [filters, setFilters] = useState([])
  const [languages, setLanguages] = useState([])
  const [countires, setCountries] = useState([])

  const [tagSelect, setTagSelect] = useState("")
  const [instagramFollowers, setInstagramFollowers] = useState([0, 10000000])
  const [youtubeSubscribers, setYoutubeSubscribers] = useState([0, 10000000])

  const styleClasses = useStyles()


  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property)
  }

  function handleInstagramFollowersChange(e, newValue) {
    setInstagramFollowers(newValue)
  }

  function removeTag(tag) {
    setFilters(
      filters.filter((existingTag) => {
        if (tag !== existingTag) {
          return tag
        }
      })
    )
  }

  const headCells = [
    { id: "name", numeric: false, disablePadding: true, label: "Name" },
    {
      id: "instagram",
      numeric: true,
      disablePadding: false,
      label: "Instagram",
    },
    { id: "youtube", numeric: true, disablePadding: false, label: "Youtube" },
    { id: "twitter", numeric: true, disablePadding: false, label: "Twitter" },
    { id: "tiktok", numeric: true, disablePadding: false, label: "TikTok" },
    { id: "tags", numeric: false, disablePadding: false, label: "Tags" },
    { id: "country", numeric: false, disablePadding: false, label: "Country" },
  ]

  return (
    <>
      <h1>Available Influencers</h1>
      Click to enter the profile of each influencer for more detailed analysis.
      <h3>Filters</h3>
      <h5>Tags</h5>
      {filters.map((tag) => (
        <div className="tag-filter">
          {tag}{" "}
          <div className="cancel-button" onClick={() => removeTag(tag)}>
            X
          </div>
        </div>
      ))}
      <h5>Countries</h5>
      {filters.map((tag) => (
        <div className="tag-filter">
          {tag}{" "}
          <div className="cancel-button" onClick={() => removeTag(tag)}>
            X
          </div>
        </div>
      ))}
      <h5>Languages</h5>
      {filters.map((tag) => (
        <div className="tag-filter">
          {tag}{" "}
          <div className="cancel-button" onClick={() => removeTag(tag)}>
            X
          </div>
        </div>
      ))}
      <label>Tags</label>
      <input
        type="text"
        value={tagSelect}
        onChange={(e) => setTagSelect(e.target.value)}
      />
      <button
        onClick={() => {
          setFilters([...filters, tagSelect])
        }}
      >
        Add
      </button>
      <label>Countries</label>
      <select>
        <option>USA</option>
        <option>United Kingdom</option>
        <option>Canada</option>
        <option>Brazil</option>
        <option>Sweden</option>
      </select>
      <button>Add</button>
      <label>Language</label>
      <select>
        <option>English</option>
        <option>German (Deustch)</option>
        <option>French (Francais)</option>
        <option>Spanish (Espanol)</option>
      </select>
      <button>Add</button>
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
      <button onClick={() => clearAllFilters()}>Clear All Filters</button>
      <TableContainer component={Paper} className="container">
        <Table
          className={styleClasses.table}
          stickyHeader
          aria-label="sticky table"
        >
          <TableHead>
            <TableRow>
              {headCells.map((headCell) => (
                <TableCell
                  key={headCell.id}
                  align={headCell.numeric ? "right" : "left"}
                  padding={headCell.disablePadding ? "none" : "default"}
                  sortDirection={orderBy === headCell.id ? order : false}
                >
                  <TableSortLabel
                    active={orderBy === headCell.id}
                    direction={orderBy === headCell.id ? order : "asc"}
                    onClick={createSortHandler(headCell.id)}
                  >
                    {headCell.label}
                    {orderBy === headCell.id ? (
                      <span className={classes.visuallyHidden}>
                        {order === "desc"
                          ? "sorted descending"
                          : "sorted ascending"}
                      </span>
                    ) : null}
                  </TableSortLabel>
                </TableCell>
              ))}
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
                <TableCell align="right">{row.country}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
