"use strict";

const Pois = {
    home: {
        handler: function (request, h) {
            return h.view("home", { title: "Enter a POI farm" });
        },
    },
    report: {
        handler: function (request, h) {
            return h.view("report", { title: "Farms entered so far" });
        },
    },
};

module.exports = Pois;