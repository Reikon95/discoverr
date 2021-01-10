import { React } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import "./index-table.css"
import ProfilePage from "./profile-page/profile-page"

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

function createTagList(tags) {
  return tags.join(", ")
}

export default function IndexTable() {
  const classes = useStyles()

  return (
    <>
      <h1>Available Influencers</h1>
      Click to enter the profile of each influencer for more detailed analysis.
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
      {ProfilePage("Ninja")}
    </>
  )
}
