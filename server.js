const redirectToHTTPS = require("express-http-to-https").redirectToHTTPS;
const express = require("express");
const fetch = require("node-fetch");
const app = express();

init();

function init() {
  // tells server to access static pages in public folder
  // http://expressjs.com/en/starter/static-files.html

  app.use(redirectToHTTPS([/localhost:(\d{4})/], [], 301));
  app.use((req, resp, next) => {
    const now = new Date();
    const time = `${now.toLocaleDateString()} - ${now.toLocaleTimeString()}`;
    const path = `"${req.method} ${req.path}"`;
    const m = `${req.ip} - ${time} - ${path}`;
    //eslint-disable-next-line no-console
    console.log(m);
    next();
  });
  app.use(express.static("public"));

  // Handle requests for the data
  // http://expressjs.com/en/starter/basic-routing.html
  app.get("data[0].meta.id");
  app.get("data[0].hwi.prs[0].mw");
  app.get("data[0].shortdef[0]");
  //logging for each request

  // listen for requests :)
  const listener = app.listen(process.env.PORT, function() {
    console.log("Your app is listening on port " + listener.address().port);
  });

  //getData(url);
} //init
