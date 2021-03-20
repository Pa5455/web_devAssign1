const Pois = {
    index: {
        handler: function (request, h) {
            return h.view('main', { title: 'Welcome to Farm Sales POI' });
        },
    },
    signup: {
        handler: function (request, h) {
            return h.view('signup', { title: 'Sign up for POI' });
        },
    },
    login: {
        handler: function (request, h) {
            return h.view('login', { title: 'Login to Donations' });
        },
    },
};

module.exports = Pois;