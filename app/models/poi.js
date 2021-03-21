"use strict";

const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const poiSchema = new Schema({
    farmer_name: String,
    method: String,
    sales_person: {
        type: Schema.Types.ObjectID,
        ref: 'User'
    }

});

module.exports = Mongoose.model("POI", poiSchema);