const route = require("express").Router();
const setResponse = require("./setResponse");
const { findOne } = require("./mongoose");

const City = [
  {
    _id: 1,
    title: "Lahore",
  },
];

route.get("/", (req, res) => {
  return setResponse(res, null, City);
});

route.get("/:id", (req, res) => {
  const id = req.params.id;
  const data = findOne(City, "_id", id);
  if (!data) return setResponse(res, "City not found!", null, 404);
  return setResponse(res, null, data);
});

route.post("/", (req, res) => {
  const data = req.body;
  if (!data.title) {
    return setResponse(res, "City title is required", null, 405);
  }
  const userExist = findOne(City, "title", data.title);
  if (userExist) {
    return setResponse(res, "City already exist with this title.", null, 405);
  }
  const id = City[City.length - 1]._id + 1;
  City.push({
    _id: id,
    title: data.title,
  });
  return setResponse(res, "City added", null, 201);
});

module.exports = route;
