import "./App.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import ShowcasePage from "./components/showcase-page/showcase-page.jsx"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import ProfilePage from "./components/profile-page/profile-page"
import EnhancedTable from "./components/index-table.jsx"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))
function App() {
  const classes = useStyles()

  return (
    <div className="App">
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Discoverr
            </Typography>
            <Button color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>
      </div>
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/table">
              <EnhancedTable />
            </Route>
            <Route path="/ninja">
              <ProfilePage user="Ninja" />
            </Route>
            <Route path="/showcase">
              <ShowcasePage
                name="Cristiano Ronaldo"
                deals={[
                  { name: "Macron", offer: "10% off first purchase" },
                  { name: "Canterbury", offer: "15% off subscription" },
                  { name: "Nike", offer: "Free Socks" },
                  { name: "Adidas", offer: "Win an Arsenal Shirt" },
                  { name: "Underarmour", offer: "25% off first purchase" },
                  { name: "Warrior", offer: "50% off first three purchases" },
                  { name: "CCM", offer: "Win a free stick" },
                  { name: "Puma", offer: "20% extra off all sale items" },
                  { name: "Fila", offer: "15% off jackets" },
                ]}
              />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

function Home() {
  return <h2>Home</h2>
}

export default App
