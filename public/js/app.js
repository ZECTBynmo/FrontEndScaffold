require("../styles/index.less");

window.Backbone = require('backbone');
window.$ = require('jquery');
window.jQuery = window.$;
window.Backbone.$ = window.$;

var Router = require("./router.js").router;

$(function() {
    window.FrontEndScaffold = {
        router: new Router()
    };

    Backbone.history.start();
});