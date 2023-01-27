const route = require("express").Router();
const setResponse = require("./setResponse");
const { findOne } = require("./mongoose");

const Site = [
  {
    _id: 1,
    address: "XYZ-4391",
    client: 1,
    area: 12,
    area_unit: 1,
    supervisor_sr: 1,
    supervisor_jr: 1,
    purchasers: [],
    approved: 1,
  },
];

route.get("/", (req, res) => {
  return setResponse(res, null, Site);
});

route.get("/:id", (req, res) => {
  const id = req.params.id;
  const data = findOne(Site, "_id", id);
  if (!data) return setResponse(res, "Site not found!", null, 404);
  return setResponse(res, null, data);
});

route.post("/", (req, res) => {
  const data = req.body;
  if (!data.address) {
    return setResponse(res, "Site address is required", null, 405);
  }
  if (!data.client) {
    return setResponse(res, "Client is required", null, 405);
  }
  if (!data.area) {
    return setResponse(res, "Area is required", null, 405);
  }
  if (!data.area_unit) {
    return setResponse(res, "Area unit is required", null, 405);
  }
  if (!data.supervisor_sr) {
    return setResponse(res, "Senior supervisor is required", null, 405);
  }
  if (!data.supervisor_jr) {
    return setResponse(res, "Junior supervisor is required", null, 405);
  }
  if (!data.purchasers || data.purchasers.length < 1) {
    return setResponse(res, "Purchaser(s) is required", null, 405);
  }
  const siteExist = findOne(Site, "address", data.address);
  if (siteExist) {
    return setResponse(res, "Site already exist with this address.", null, 405);
  }
  const id = Site[Site.length - 1]._id + 1;
  Site.push({
    _id: id,
    address: data.address,
    client: data.client,
    area: data.area,
    area_unit: data.area_unit,
    supervisor_sr: data.supervisor_sr,
    supervisor_jr: data.supervisor_jr,
    purchasers: data.purchasers, // { city, material, purchaser }
    approved: 0, // 0 => Pending, 1 => Approved, 2 => Rejected
  });
  return setResponse(res, "Request sent to accounts", null, 201);
});

route.put("/:id", (req, res) => {
  const data = req.body;
  const id = req.params.id;
  if (!data.address) {
    return setResponse(res, "Site address is required", null, 405);
  }
  if (!data.client) {
    return setResponse(res, "Client is required", null, 405);
  }
  if (!data.area) {
    return setResponse(res, "Area is required", null, 405);
  }
  if (!data.area_unit) {
    return setResponse(res, "Area unit is required", null, 405);
  }
  if (!data.supervisor_sr) {
    return setResponse(res, "Senior supervisor is required", null, 405);
  }
  if (!data.supervisor_jr) {
    return setResponse(res, "Junior supervisor is required", null, 405);
  }
  const newObject = {
    _id: parseInt(id),
    address: data.address,
    client: data.client,
    area: data.area,
    area_unit: data.area_unit,
    supervisor_sr: data.supervisor_sr,
    supervisor_jr: data.supervisor_jr,
    purchasers: data.purchasers, // { city, material, purchaser }
    approved: 0, // 0 => Pending, 1 => Approved, 2 => Rejected
    ...data
  };
  for (let i = 0; i < Site.length; i++) {
    if (Site[i]._id == id) {
      Site[i] = newObject;
      return setResponse(res, "Updated", null, 200);
    }
  }
  return setResponse(res, "Site not found", null, 404);
});

module.exports = route;
