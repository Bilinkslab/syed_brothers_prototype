const route = require("express").Router();
const setResponse = require("./setResponse");
const { findOne } = require("./mongoose");

const Client = [
  {
    _id: 1,
    name: "Abdul Raheem",
    cnic: "3810361753177",
    mobile: "03134386826",
  },
];

route.get("/", (req, res) => {
  return setResponse(res, null, Client);
});

route.get("/:id", (req, res) => {
  const id = req.params.id;
  const data = findOne(Client, "_id", id);
  if (!data) return setResponse(res, "Client not found!", null, 404);
  return setResponse(res, null, data);
});

route.post("/", (req, res) => {
  const data = req.body;
  if (!data.name) {
    return setResponse(res, "Client name is required", null, 405);
  }
  if (!data.cnic) {
    return setResponse(res, "Client cnic is required", null, 405);
  }
  if (!data.mobile) {
    return setResponse(res, "Client mobile number is required", null, 405);
  }
  const userExist = findOne(Client, "cnic", data.cnic);
  if (userExist) {
    return setResponse(res, "Client already exist with this cnic.", null, 405);
  }
  const id = Client[Client.length - 1]._id + 1;
  Client.push({
    _id: id,
    name: data.name,
    cnic: data.cnic,
    mobile: data.mobile,
  });
  return setResponse(res, "Client added", null, 201);
});

module.exports = route;
