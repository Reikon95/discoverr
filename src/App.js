import "./App.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import ShowcasePage from "./components/showcase-page/showcase-page.jsx"
import SignUp from "./components/signup/signup"
import SignUpOffers from "./components/signup/signUpOffers"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import ProfilePage from "./components/profile-page/profile-page"
import EnhancedTable from "./components/index-table.jsx"
import { Provider } from "react-redux"
import { store } from "./redux/index"
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
    <Provider store={store}>
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
            <Switch>
              <Route path="/table">
                <EnhancedTable />
              </Route>
              <Route path="/showcase">
                <ShowcasePage
                  name="Barney Banks"
                  deals={[
                    {
                      showDeal: false,
                      name: "Macron",
                      offer: "10% off first purchase",
                    },
                    {
                      showDeal: false,
                      name: "Canterbury",
                      offer: "15% off subscription",
                    },
                    { showDeal: false, name: "Nike", offer: "Free Socks" },
                    {
                      showDeal: false,
                      name: "Adidas",
                      offer: "Win an Arsenal Shirt",
                    },
                    {
                      showDeal: false,
                      name: "Underarmour",
                      offer: "25% off first purchase",
                    },
                    {
                      showDeal: false,
                      name: "Warrior",
                      offer: "50% off first three purchases",
                    },
                    { showDeal: false, name: "CCM", offer: "Win a free stick" },
                    {
                      showDeal: false,
                      name: "Puma",
                      offer: "20% extra off all sale items",
                    },
                    { showDeal: false, name: "Fila", offer: "15% off jackets" },
                  ]}
                  socials={[
                    { social: "Instagram", link: "" },
                    { social: "Facebook", link: "" },
                    { social: "Twitter", link: "" },
                    { social: "TikTok", link: "" },
                  ]}
                  tags={["Content Creator", "Model", "Streamer"]}
                  bio="Hi Guys! Welcome to my Discoverr showcase. I am Barney Banks, a UK based
                  Content creator, gamer, model, and all round legend. Check out my
                  socials below as well as the discounts i have with my trusted brands
                  such as The Protein Works! Thank you for the support, BOSH!"
                />
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route>
              <Route path="/signup2">
                <SignUpOffers />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </Provider>
  )
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Link to="/signup">Sign Up</Link>
    </div>
  )
}

export default App
