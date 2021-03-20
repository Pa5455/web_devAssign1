'use strict';

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
        handler: function(request, h) {
            const user = request.payload;
            this.users[user.email] = user;
            request.cookieAuth.set({ id: user.email });
            return h.redirect('/home');
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
        handler: function (request, h) {
            const user = request.payload;
            if (user.email in this.users && user.password === this.users[user.email].password) {
                request.cookieAuth.set({ id: user.email });
                return h.redirect("/home");
            }
            return h.redirect("/");
        },
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