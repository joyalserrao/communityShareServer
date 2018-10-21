"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes.js");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

//
// const server = app.listen(3000,'127.0.0.1',function () {
// 	console.log("app running on port.", server.address().port);
// 	console.log("app running on address.", server.address().address);
// });


const server = app.listen(3000,'127.0.0.1',function () {
	console.log("app running on port.", server.address().port);
	console.log("app running on address.", server.address().address);
});
