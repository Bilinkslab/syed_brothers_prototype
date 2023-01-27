const route = require("express").Router();

// Routes
const client = require("./client");
route.use("/client", client);
const raw_material = require("./raw_material");
route.use("/raw_material", raw_material);
const area_unit = require("./area_unit");
route.use("/area_unit", area_unit);
const supervisor = require("./supervisor");
route.use("/supervisor", supervisor);
const city = require("./city");
route.use("/city", city);
const purchaser = require("./purchaser");
route.use("/purchaser", purchaser);
const site = require("./site");
route.use("/site", site);

module.exports = route;
