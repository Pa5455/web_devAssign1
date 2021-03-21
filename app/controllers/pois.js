"use strict";
const Poi = require("../models/poi");
const User = require("../models/user");


const Pois = {
    home: {
        handler: function (request, h) {
            return h.view("home", { title: "Add Farm POI" });
        },
    },
    report: {
        handler: async function (request, h) {
            const pois = await Poi.find().populate("sales_person").lean();
            return h.view("report", {
                title: "Farm POI do far",
                pois: pois
            });
        },
    },
    poi: {
        handler: async function(request, h) {
            try {
                const id = request.auth.credentials.id;
                const user = await User.findById(id);
                const data = request.payload;
                const newPoi = new Poi({
                    farmer_name: data.farmer_name,
                    eircode: data.eircode,
                    method: data.method,
                    county: data.county,
                    sales_person: user._id
                });
                await newPoi.save();
                return h.redirect("/report");
            } catch (err) {
                return h.view("main", { errors: [{ message: err.message }] });
            }
        }
    },
    deletePoi: {
        handler: async function (request, h) {
            const poi = Poi.findById(request.params._id);
            console.log("Removing POI: " + poi);
            await poi.remove();
            return h.redirect("/report");
        }
    },

};
module.exports = Pois;