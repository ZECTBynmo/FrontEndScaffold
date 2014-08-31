var IndexView = require("./views/index").view;

var Router = Backbone.Router.extend({
    routes: {
        '': 'index',
    },

    index: function() {
        this.indexView = new IndexView();
        $(document.body).html( this.indexView.render().el );
    },
});

exports.router = Router;