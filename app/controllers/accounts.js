'use strict';
const User = require('../models/user');
const Boom = require("@hapi/boom");

const Accounts = {
    index: {
        auth: false,
        handler: function(request, h) {
            return h.view('main', { title: 'Welcome to Farm Sales Farm locator' });
        }
    },
    showSignup: {
        auth: false,
        handler: function(request, h) {
            return h.view('signup', { title: 'Sign up for POI farms' });
        }
    },
    signup: {
        auth: false,
        handler: async function(request, h) {
            const payload = request.payload;
            const newUser = new User({
                firstName: payload.firstName,
                lastName: payload.lastName,
                email: payload.email,
                password: payload.password
            });
            const user = await newUser.save();
            request.cookieAuth.set({ id: user.id });
            return h.redirect("/home");
        }
    },


    showLogin: {
        auth: false,
        handler: function(request, h) {
            return h.view('login', { title: 'Login to POI farms' });
        }
    },
    login: {
        auth: false,
        handler: async function(request, h) {
            const { email, password } = request.payload;
            let user = await User.findByEmail(email);
            if (!user) {
                return h.redirect("/");
            }
            if (user.comparePassword(password)) {
                request.cookieAuth.set({ id: user.id });
                return h.redirect("/home");
            }
            return h.redirect("/");
        }
    },

    logout: {
        handler: function(request, h) {
            request.cookieAuth.clear();
            return h.redirect('/');
        }
    },

    showSettings: {
        handler: function(request, h) {
            var sales_personEmail = request.auth.credentials.id;
            const userDetails = this.users[sales_personEmail];
            return h.view('settings', { title: 'Farm POI Settings', user: userDetails });
        }
    },
    updateSettings: {
        handler: function(request, h) {
            const user = request.payload;
            this.users[user.email] = user;
            return h.redirect('/settings');
        }
    },


};

module.exports = Accounts;