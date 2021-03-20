"use strict";

const Pois = {
    home: {
        handler: function (request, h) {
            return h.view("home", {title: "Enter a POI farm"});
        },
    },
    report: {
        handler: function (request, h) {
            return h.view("report", {
                title: "Farm Data POI entered so far: ",
                donations: this.donations,
            });
        },
    },
    poi: {
        handler: function (request, h) {
            const data = request.payload;
            this.pois.push(data);
            return h.redirect("/report");
        },
    },
};

module.exports = Pois;