const express = require("express");
const router = express.Router();
const unirest = require("unirest");

router.get("/", (req, res, next) => {
  req = unirest("GET", "https://api.openuv.io/api/v1/uv");

  req.query({
    lat: "-31.1",
    lng: "56.4"
  });

  req.headers({
    "cache-control": "no-cache",
    Connection: "keep-alive",
    "Accept-Encoding": "gzip, deflate",
    Host: "api.openuv.io",
    "Postman-Token": "",
    "Cache-Control": "no-cache",
    Accept: "*/*",
    "User-Agent": "PostmanRuntime/7.18.0",
    "x-access-token": ""
  });
  req.end(function(request) {
    if (request.error) throw new Error(request.error);

    res.status(200).json(request);
  });
});

module.exports = router;
