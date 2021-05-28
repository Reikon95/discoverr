import { AppBar, Toolbar, Typography, Button } from "@material-ui/core"
import "./navbar.scss"

export default function NavBar() {
  return (
    <div className="containing-nav-wrapper">
      <AppBar position="static" className="global-navbar discoverr-navbar">
        <Toolbar className="global-navbar discoverr-navbar">
          <Typography variant="h6" className="main-logo">
            DISCOVERR
          </Typography>
          <div>
            <Button color="inherit">ACCOUNT SETTINGS</Button>
            <Button color="inherit">LOG OUT</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

// todo - add logout login signup functions
