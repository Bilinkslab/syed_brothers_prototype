const route = require("express").Router();
const setResponse = require("./setResponse");
const { findOne } = require("./mongoose");

const AreaUnit = [
  {
    _id: 1,
    title: "marla",
  },
];

route.get("/", (req, res) => {
  return setResponse(res, null, AreaUnit);
});

route.get("/:id", (req, res) => {
  const id = req.params.id;
  const data = findOne(AreaUnit, "_id", id);
  if (!data) return setResponse(res, "Area unit not found!", null, 404);
  return setResponse(res, null, data);
});

route.post("/", (req, res) => {
  const data = req.body;
  if (!data.title) {
    return setResponse(res, "Area unit title is required", null, 405);
  }
  const userExist = findOne(AreaUnit, "title", data.title);
  if (userExist) {
    return setResponse(res, "Area unit already exist with this title.", null, 405);
  }
  const id = AreaUnit[AreaUnit.length - 1]._id + 1;
  AreaUnit.push({
    _id: id,
    title: data.title,
  });
  return setResponse(res, "Area unit added", null, 201);
});

module.exports = route;
