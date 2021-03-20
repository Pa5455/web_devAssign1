"use strict";

const Pois = {
    home: {
        handler: function (request, h) {
            return h.view("home", { title: "Add Farm POI" });
        },
    },
    report: {
        handler: function (request, h) {
            return h.view("report", {
                title: "Farm POI entries to Date",
                pois: this.pois,
            });
        },
    },
    poi: {
        handler: function (request, h) {
            const data = request.payload;
            var sales_personEmail = request.auth.credentials.id;
            data.sales_person = this.users[sales_personEmail];
            this.pois.push(data);
            return h.redirect("/report");
        },
    },
};
module.exports = Pois;