const router = require('express').Router();
const steam = require('steam-login');
const { steamAuthenticationController } = require('../http/controllers/steam.login.controller');

//? Authentication Route
router.get('/authenticate', steam.authenticate(), steamAuthenticationController.authenticate);

//? Verify Route
router.get('/verify', steam.verify(), steamAuthenticationController.verify);


module.exports = {
    SteamRoutes: router
}