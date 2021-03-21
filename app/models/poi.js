"use strict";

const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const poiSchema = new Schema({
    id: String,
    method: String,

});

module.exports = Mongoose.model("Farm POI", poiSchema);