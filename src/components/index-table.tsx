import React from "react"
import { useState } from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import { lighten, makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TablePagination from "@material-ui/core/TablePagination"
import TableRow from "@material-ui/core/TableRow"
import TableSortLabel from "@material-ui/core/TableSortLabel"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import Checkbox from "@material-ui/core/Checkbox"
import IconButton from "@material-ui/core/IconButton"
import Tooltip from "@material-ui/core/Tooltip"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Switch from "@material-ui/core/Switch"
import DeleteIcon from "@material-ui/icons/Delete"
import FilterListIcon from "@material-ui/icons/FilterList"
import Slider from "@material-ui/core/Slider"

function createData(
  name: string,
  instagram: number,
  youtube: number,
  twitter: number,
  tiktok: number,
  tags: any[],
  country: string
) {
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
  createData(
    "Dan Abramov",
    2620,
    160000,
    242031,
    0,
    ["Programming", "Coding", "Javascript"],
    "UK"
  ),
  createData(
    "Cristiano Ronaldo",
    120000000,
    0,
    2100000,
    4342012,
    ["Football (Soccer)", "Athletes"],
    "USA"
  ),
  createData(
    "Yung Lean",
    35600,
    21000,
    0,
    0,
    ["Musician", "Rapper", "Fashion"],
    "Sweden"
  ),
]

function descendingComparator(a: any, b: any, orderBy: any) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index])
  console.log(stabilizedThis)
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) return order
    return a[1] - b[1]
  })
  console.log(stabilizedThis.map((el) => el[0]))
  return stabilizedThis.map((el) => el[0])
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

function EnhancedTableHead(props) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property)
  }

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all desserts" }}
          />
        </TableCell>
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
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
}

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: "1 1 100%",
  },
}))

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles()
  const { numSelected } = props

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Influencer Database
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  )
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
}))

export default function EnhancedTable() {
  let filteredView = rows

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

  function removeTag(tag) {
    setFilters(
      filters.filter((existingTag) => {
        if (tag !== existingTag) {
          return tag
        }
      })
    )
  }

  const [filters, setFilters] = useState([])
  const [centralFilters, setCentralFilters] = useState({
    tags: [],
    countries: [],
    languages: [],
    instagram: { min: 0, max: 10000000 },
  })

  const [languages, setLanguages] = useState([])
  const [countires, setCountries] = useState([])

  const [tagSelect, setTagSelect] = useState("")
  const [instagramFollowers, setInstagramFollowers] = useState([0, 10000000])
  const [youtubeSubscribers, setYoutubeSubscribers] = useState([0, 10000000])

  const classes = useStyles()
  const [order, setOrder] = useState("asc")
  const [orderBy, setOrderBy] = useState("calories")
  const [selected, setSelected] = useState([])
  const [page, setPage] = useState(0)
  const [dense, setDense] = useState(false)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  function handleInstagramFollowersChange(e, newValue) {
    setInstagramFollowers(newValue)
  }

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc"
    setOrder(isAsc ? "desc" : "asc")
    setOrderBy(property)
    console.log(centralFilters)
  }

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name)
      setSelected(newSelecteds)
      return
    }
    setSelected([])
  }

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name)
    let newSelected = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      )
    }

    setSelected(newSelected)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const handleChangeDense = (event) => {
    setDense(event.target.checked)
  }

  const isSelected = (name) => selected.indexOf(name) !== -1

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)

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
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <EnhancedTableToolbar numSelected={selected.length} />
          <TableContainer>
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              size={dense ? "small" : "medium"}
              aria-label="enhanced table"
            >
              <EnhancedTableHead
                classes={classes}
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.name)
                    const labelId = `enhanced-table-checkbox-${index}`

                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.name)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.name}
                        selected={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={isItemSelected}
                            inputProps={{ "aria-labelledby": labelId }}
                          />
                        </TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.instagram}</TableCell>
                        <TableCell align="right">{row.youtube}</TableCell>
                        <TableCell align="right">{row.twitter}</TableCell>
                        <TableCell align="right">{row.tiktok}</TableCell>
                        <TableCell align="right">{row.tags}</TableCell>
                        <TableCell align="right">{row.country}</TableCell>
                      </TableRow>
                    )
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
        <FormControlLabel
          control={<Switch checked={dense} onChange={handleChangeDense} />}
          label="Dense padding"
        />
      </div>
    </>
  )
}
