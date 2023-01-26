const route = require("express").Router();
const setResponse = require("./setResponse");
const { findOne } = require("./mongoose");

const Purchaser = [
  {
    _id: 1,
    name: "Abdul Raheem",
    cnic: "3810361753177",
    mobile: "03134386826",
    city: "Lahore",
    current: "Lahore",
  },
  {
    _id: 2,
    name: "Fahad Ur Rehman",
    cnic: "3810361754127",
    mobile: "03043111213",
    city: "Lahore",
    current: "Lahore",
  },
];

route.get("/", (req, res) => {
  return setResponse(res, null, Purchaser);
});

route.get("/:id", (req, res) => {
  const id = req.params.id;
  const data = findOne(Purchaser, "_id", id);
  if (!data) return setResponse(res, "Purchaser not found!", null, 404);
  return setResponse(res, null, data);
});

route.post("/", (req, res) => {
  const data = req.body;
  if (!data.name) {
    return setResponse(res, "Purchaser name is required", null, 405);
  }
  if (!data.cnic) {
    return setResponse(res, "Purchaser cnic is required", null, 405);
  }
  if (!data.mobile) {
    return setResponse(res, "Purchaser mobile number is required", null, 405);
  }
  if (!data.city) {
    return setResponse(res, "Purchaser city is required", null, 405);
  }
  if (!data.current) {
    return setResponse(res, "Purchaser current city is required", null, 405);
  }
  const userExist = findOne(Purchaser, "cnic", data.cnic);
  if (userExist) {
    return setResponse(
      res,
      "Purchaser already exist with this cnic.",
      null,
      405
    );
  }
  const id = Purchaser[Purchaser.length - 1]._id + 1;
  Purchaser.push({
    _id: id,
    name: data.name,
    cnic: data.cnic,
    mobile: data.mobile,
    city: data.city,
    current: data.current,
  });
  return setResponse(res, "Purchaser added", null, 201);
});

module.exports = route;
