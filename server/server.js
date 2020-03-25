"use strict";
exports.__esModule = true;
// Add express
var express_1 = require("express");
var app = express_1["default"]();
var PORT = 3000;
app.listen(PORT, function () { return console.log("Listening on " + PORT); });
