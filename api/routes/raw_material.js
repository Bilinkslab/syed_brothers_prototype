const route = require("express").Router();
const setResponse = require("./setResponse");
const { findOne } = require("./mongoose");

const RawMaterial = [
  {
    _id: 1,
    title: "cement",
  },
];

route.get("/", (req, res) => {
  return setResponse(res, null, RawMaterial);
});

route.get("/:id", (req, res) => {
  const id = req.params.id;
  const data = findOne(RawMaterial, "_id", id);
  if (!data) return setResponse(res, "Raw material not found!", null, 404);
  return setResponse(res, null, data);
});

route.post("/", (req, res) => {
  const data = req.body;
  if (!data.title) {
    return setResponse(res, "Raw material title is required", null, 405);
  }
  const userExist = findOne(RawMaterial, "title", data.title);
  if (userExist) {
    return setResponse(res, "Raw material already exist with this title.", null, 405);
  }
  const id = RawMaterial[RawMaterial.length - 1]._id + 1;
  RawMaterial.push({
    _id: id,
    title: data.title,
  });
  return setResponse(res, "Raw material added", null, 201);
});

module.exports = route;
