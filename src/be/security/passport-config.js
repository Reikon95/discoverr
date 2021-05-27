const LocalStrategy = require('passport-local').Strategy

const initialize = (passport) => {
    const authenticateUser = (email, password, done) => {

    }
    passport.use(new LocalStrategy({usernameField: 'email'}), authenticateUser)
    passport.seralizeUser((user, done) => {})
}