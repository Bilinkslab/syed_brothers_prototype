const route = require("express").Router();
const setResponse = require("./setResponse");
const { find, findOne } = require("./mongoose");

const Supervisor = [
  {
    _id: 1,
    name: "Abdul Raheem",
    cnic: "3810361753177",
    mobile: "03134386826",
    city: "Lahore",
    current: "Lahore",
    position: "sr",
  },
  {
    _id: 2,
    name: "Fahad Ur Rehman",
    cnic: "3810361754127",
    mobile: "03043111213",
    city: "Lahore",
    current: "Lahore",
    position: "jr",
  },
];

route.get("/", (req, res) => {
  return setResponse(res, null, Supervisor);
});

route.get("/:id", (req, res) => {
  const id = req.params.id;
  const data = findOne(Supervisor, "_id", id);
  if (!data) return setResponse(res, "Supervisor not found!", null, 404);
  return setResponse(res, null, data);
});

route.get("/:position/all", (req, res) => {
  const id = req.params.id;
  const data = find(Supervisor, "position", req.params.position);
  return setResponse(res, null, data);
});

route.post("/", (req, res) => {
  const data = req.body;
  if (!data.name) {
    return setResponse(res, "Supervisor name is required", null, 405);
  }
  if (!data.cnic) {
    return setResponse(res, "Supervisor cnic is required", null, 405);
  }
  if (!data.mobile) {
    return setResponse(res, "Supervisor mobile number is required", null, 405);
  }
  if (!data.city) {
    return setResponse(res, "Supervisor city is required", null, 405);
  }
  if (!data.current) {
    return setResponse(res, "Supervisor current city is required", null, 405);
  }
  if (!data.position) {
    return setResponse(res, "Supervisor position is required", null, 405);
  }
  const userExist = findOne(Supervisor, "cnic", data.cnic);
  if (userExist) {
    return setResponse(
      res,
      "Supervisor already exist with this cnic.",
      null,
      405
    );
  }
  const id = Supervisor[Supervisor.length - 1]._id + 1;
  Supervisor.push({
    _id: id,
    name: data.name,
    cnic: data.cnic,
    mobile: data.mobile,
    city: data.city,
    current: data.current,
    position: data.position,
  });
  return setResponse(res, "Supervisor added", null, 201);
});

module.exports = route;
