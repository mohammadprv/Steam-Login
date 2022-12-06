const { SteamRoutes } = require('./steamRoute');

const router = require('express').Router();

router.use("/", SteamRoutes);



module.exports = {
    AllRoutes: router
}