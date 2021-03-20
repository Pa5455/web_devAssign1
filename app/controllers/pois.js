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
                pois: this.pois,
            });
        },
    },
    poi: {
        handler: function (request, h) {
            let data = request.payload;
            data.sales_person = this.currentUser;
            this.pois.push(data);
            return h.redirect("/report");
        },
    },
};

module.exports = Pois;