import "./_variables.scss"
import "./App.scss"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import NavBar from "./components/navbar/navbar.tsx"
import ShowcasePage from "./components/showcase-page/showcase-page.tsx"
import SocialSignUp from "./components/auth/socialSignIn.tsx"
import SignUp from "./components/signup/signup"
import SignUpOffers from "./components/signup/signUpOffers"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import EnhancedTable from "./components/index-table.tsx"
import { UserProvider } from "./StateContext"
import LandingPage from "./components/landing-page/landing-page"

export default function App() {
  return (
    <UserProvider>
      <div className="App">
        <div>
          <NavBar />
        </div>
        <Router>
          <div>
            <Switch>
              <Route path="/table">
                <EnhancedTable />
              </Route>
              <Route path="/showcase/barneybanks">
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
                    {
                      social: "Instagram",
                      link: "https://www.instagram.com/iammrbanks",
                    },
                    { social: "Facebook", link: "" },
                    { social: "Twitter", link: "" },
                    { social: "TikTok", link: "" },
                  ]}
                  tags={["Content Creator", "Model", "Streamer"]}
                  bio="Hi Guys! Welcome to my Discoverr showcase. I am Barney Banks, a UK based
                  Content creator, gamer, model, and all round legend. Check out my
                  socials below as well as the discounts I have with my trusted brands
                  such as The Protein Works! Thank you for the support, BOSH!"
                />
              </Route>
              <Route path="/signup-step-1">
                <SignUp />
              </Route>
              <Route path="/signup-step-2">
                <SignUpOffers />
              </Route>
              <Route path="/social-signup">
                <SocialSignUp />
              </Route>
              <Route path="/landing">
                <LandingPage />
              </Route>

              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </UserProvider>
  )
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}
