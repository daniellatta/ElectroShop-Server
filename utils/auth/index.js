const passport = require('passport');
const LocalStratergy = require('./stratergies/local.stratergy');

passport.use(LocalStratergy);