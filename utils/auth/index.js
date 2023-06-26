const passport = require('passport');
const LocalStratergy = require('./stratergies/local.stratergy');
const GoogleStrategy = require('./stratergies/google.strategy');


passport.use(LocalStratergy);
passport.use(GoogleStrategy);